﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Sqlbi.Bravo.Core;
using Sqlbi.Bravo.Core.Logging;
using Sqlbi.Bravo.Core.Services;
using Sqlbi.Bravo.Core.Services.Interfaces;
using Sqlbi.Bravo.Core.Settings;
using Sqlbi.Bravo.Core.Settings.Interfaces;
using Sqlbi.Bravo.UI.Controls;
using Sqlbi.Bravo.UI.DataModel;
using Sqlbi.Bravo.UI.Framework.Commands;
using Sqlbi.Bravo.UI.Framework.ViewModels;
using Sqlbi.Bravo.UI.Views;
using System;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace Sqlbi.Bravo.UI.ViewModels
{
    internal class ShellViewModel : BaseViewModel
    {
        private readonly IAnalysisServicesEventWatcherService _watcher;
        private readonly ILogger _logger;

        public ShellViewModel(IAnalysisServicesEventWatcherService watcher, ILogger<ShellViewModel> logger)
        {
            _watcher = watcher;
            _logger = logger;

            _logger.Trace();
            _watcher.OnEvent += OnAnalysisServicesEvent;
            _watcher.OnConnectionStateChanged += OnAnalysisServicesConnectionStateChanged;

            PrintDebug();

            Tabs = new ObservableCollection<TabItemViewModel>() { (TabItemViewModel)App.ServiceProvider.GetRequiredService(typeof(TabItemViewModel)) };
            SelectedTab = Tabs[0];

            ItemSelectedCommand = new RelayCommand(async () => await ItemSelected());

            Tabs.CollectionChanged += (s, e) =>
            {
                // If all tabs closed ...
                if (!Tabs.Any())
                {
                    // ... open a new tab
                    // - via some threading gymnastics as it's not possible to modify the collection during the Changed event
                    var tempthread = new Thread(() =>
                    {
                        Application.Current.Dispatcher.Invoke(() =>
                        {
                            Tabs.Add((TabItemViewModel)App.ServiceProvider.GetRequiredService(typeof(TabItemViewModel)));
                            // Ensure the new tab is selected so the contents load
                            SelectedTab = Tabs.First();
                        });
                    })
                    {
                        IsBackground = false,
                        Priority = ThreadPriority.BelowNormal,
                    };
                    tempthread.Start();
                }
            };
        }

        internal void LaunchedViaPowerBIDesktop(string title)
        {
            SelectedTab.ConnectionName = title.Replace(" - Power BI Desktop", string.Empty);
            SelectedTab.ConnectionType = BiConnectionType.ActivePowerBiWindow;
            SelectedTab.ShowSubPage(SelectedItem?.SubPageInTab ?? SubPage.DaxFormatter);

            if (SelectedItem == null)
            {
                SelectedItem = MenuItems.First();
            }
#if DEBUG
            if (string.IsNullOrWhiteSpace(SelectedTab.ConnectionName))
            {
                SelectedTab.ConnectionName = "DEBUG";
            }
#endif
        }

        public double WindowMinWidth => 800D;

        public double WindowMinHeight => 600D;

        public string WindowTitle => AppConstants.ApplicationNameLabel;

        public ObservableCollection<string> OutputMessages { get; set; } = new ObservableCollection<string>();

        public ObservableCollection<NavigationItem> MenuItems
        {
            get
            {
                var daxIcon = new DaxFormatterIcon();
                daxIcon.SetResourceReference(
                    DaxFormatterIcon.ForegroundBrushProperty,
                    "MahApps.Brushes.ThemeForeground");

                return new ObservableCollection<NavigationItem>()
                {
                    new NavigationItem { Name = "Format DAX", IconControl = daxIcon, SubPageInTab = SubPage.DaxFormatter },
                    new NavigationItem { Name = "Analyze Model", IconControl = new AnalyzeModelIcon(), SubPageInTab = SubPage.AnalyzeModel },
                    new NavigationItem { Name = "Manage dates", Glyph = "\uEC92", ShowComingSoon = true },
                    new NavigationItem { Name = "Export data", Glyph = "\uE1AD", ShowComingSoon = true },
                    new NavigationItem { Name = "Best practices", Glyph = "\uE19F", ShowComingSoon = true },
                    new NavigationItem { Name = "Optimize model", Glyph = "\uEC4A", ShowComingSoon = true },
                };
            }
        }

        public static int FormatDaxItemIndex => 0;
        public static int AnalyzeModelItemIndex => 1;

        public ObservableCollection<NavigationItem> OptionMenuItems { get; } = new ObservableCollection<NavigationItem>()
        {
#if DEBUG
            new NavigationItem{ Name = "Show debug info", Glyph = "\uE7B3" },
#endif
            new NavigationItem{ Name = "Sign in", Glyph = "\uE13D" },
            new NavigationItem{ Name = "Settings", Glyph = "\uE713" },
        };

        public NavigationItem SelectedItem { get; set; }

        // Bind (and track) both SelectedItem and SelectedIndex
        // because just tracking the SelectedItem is unreliable
        // and can lead to selection highlighting getting out of sync.
        public int SelectedIndex { get; set; }

        public NavigationItem SelectedOptionsItem { get; set; }

        public ObservableCollection<TabItemViewModel> Tabs { get; set; }

        public TabItemViewModel SelectedTab { get; set; }

        public ICommand ItemSelectedCommand { get; set; }

        private void OnAnalysisServicesEvent(object sender, AnalysisServicesEventWatcherEventArgs e)
        {
            _logger.Trace();

            var action = new Action<AnalysisServicesEventWatcherEventArgs>((e) =>
            {
                var item = $"OnAnalysisServicesEvent(event<{ e.Event }>)";
                OutputMessages.Add(item);
            });

            Application.Current.Dispatcher.BeginInvoke(action, e);
        }

        [PropertyChanged.SuppressPropertyChangedWarnings]
        private void OnAnalysisServicesConnectionStateChanged(object sender, AnalysisServicesEventWatcherConnectionStateArgs e)
        {
            _logger.Trace();

            var action = new Action<AnalysisServicesEventWatcherConnectionStateArgs>((e) =>
            {
                var item = $"OnAnalysisServicesConnectionStateChanged(current<{ e.Current }>|previous<{ e.Previous }>)";
                OutputMessages.Add(item);
            });

            Application.Current.Dispatcher.BeginInvoke(action, e);
        }

        private void PrintDebug()
        {
            _logger.Trace();

            var settings = App.ServiceProvider.GetService<IGlobalSettingsProviderService>();

            OutputMessages.Add("--- PROCESS INFO ---");
            OutputMessages.Add($"CurrentProcess.Id -> { Environment.ProcessId }");
            OutputMessages.Add($"CurrentProcess.StartTime -> { System.Diagnostics.Process.GetCurrentProcess().StartTime }");
            OutputMessages.Add($"ParentProcess.Id -> { settings.Runtime.ParentProcessId }");
            OutputMessages.Add($"ParentProcess.ProcessName -> { settings.Runtime.ParentProcessName }");
            OutputMessages.Add($"ParentProcess.MainWindowTitle -> { settings.Runtime.ParentProcessMainWindowTitle }");
            OutputMessages.Add($"ParentProcess.MainWindowHandle -> { settings.Runtime.ParentProcessMainWindowHandle }");
            OutputMessages.Add("--- APPLICATION SETTINGS ---");
            OutputMessages.Add($"{ nameof(settings.Application.TelemetryEnabled) } -> { settings.Application.TelemetryEnabled }");
            OutputMessages.Add($"{ nameof(settings.Application.TelemetryLevel) } -> { settings.Application.TelemetryLevel }");
            OutputMessages.Add($"{ nameof(settings.Application.UIShellBringToForegroundOnParentProcessMainWindowScreen) } -> { settings.Application.UIShellBringToForegroundOnParentProcessMainWindowScreen }");
            OutputMessages.Add("--- RUNTIME SETTINGS ---");
            OutputMessages.Add($"{ nameof(settings.Runtime.ServerName) } -> { settings.Runtime.ServerName }");
            OutputMessages.Add($"{ nameof(settings.Runtime.DatabaseName) } -> { settings.Runtime.DatabaseName }");
            OutputMessages.Add($"{ nameof(settings.Runtime.IsExecutedAsExternalTool) } -> { settings.Runtime.IsExecutedAsExternalTool }");
            OutputMessages.Add($"{ nameof(settings.Runtime.IsExecutedAsExternalToolForPowerBIDesktop) } -> { settings.Runtime.IsExecutedAsExternalToolForPowerBIDesktop }");
            OutputMessages.Add($"{ nameof(settings.Runtime.ExternalToolInstanceId) } -> { settings.Runtime.ExternalToolInstanceId }");
            OutputMessages.Add($"{ nameof(settings.Runtime.HasCommandLineParseErrors) } -> { settings.Runtime.HasCommandLineParseErrors }");

            foreach (var error in settings.Runtime.CommandLineParseErrors)
                OutputMessages.Add($"\t{ error }");

            OutputMessages.Add("--- DEBUG ---");
        }

        public NavigationItem LastNavigation { get; private set; } = null;

        public int LastGoodSelectedIndex { get; set; } = -1;

        public void AddNewTab(BiConnectionType connType = BiConnectionType.UnSelected, SubPage subPage = SubPage.SelectConnection, RuntimeSummary runtimeSummary = null)
        {
            var newTab = (TabItemViewModel)App.ServiceProvider.GetRequiredService(typeof(TabItemViewModel));

            newTab.ConnectionType = connType;
            newTab.ShowSubPage(subPage);

            if (runtimeSummary != null)
            {
                newTab.ConnectionName = runtimeSummary.ParentProcessMainWindowTitle.Replace(" - Power BI Desktop", string.Empty);
                newTab.RuntimeSummary = runtimeSummary;
            }

            Tabs.Add(newTab);

            // Select added item so it is made visible
            SelectedTab = Tabs.Last();
        }

        private async Task ItemSelected()
        {
            if (SelectedOptionsItem != null)
            {
                if (SelectedOptionsItem.Name == "Settings")
                {
                    await ShellView.Instance.ShowSettings();
                }
                else if (SelectedOptionsItem.Name == "Show debug info")
                {
                    await ShellView.Instance.ShowDebugInfo();
                }
                else
                {
                    // TODO REQUIREMENTS: need to know how to sign in
                    _ = MessageBox.Show(
                        "Need to sign-in (this is placeholder UI)",
                        "TODO",
                        MessageBoxButton.OK,
                        MessageBoxImage.Question);
                }

                // Put selection focus back where it was
                SelectedOptionsItem = null;
                SelectedItem = MenuItems.FirstOrDefault(mi => mi.Name == LastNavigation?.Name);
            }
            else if (SelectedItem != null)
            {
                // LastNavigation is used to avoid navigating to where already are
                if (!SelectedItem.ShowComingSoon && SelectedItem.Name != (LastNavigation?.Name ?? string.Empty))
                {
                    if (SelectedItem.SubPageInTab != SubPage.AnalyzeModel
                     && SelectedTab.RuntimeSummary.UsingLocalModelForAnanlysis)
                    {
                        SelectedItem = MenuItems.FirstOrDefault(mi => mi.SubPageInTab == SubPage.AnalyzeModel);
                        SelectedIndex = AnalyzeModelItemIndex;
                    }
                    else
                    {
                        LastNavigation = SelectedItem;

                        switch (SelectedItem.SubPageInTab)
                        {
                            case SubPage.SelectConnection:
                                LastGoodSelectedIndex = -1;
                                break;
                            case SubPage.DaxFormatter:
                                LastGoodSelectedIndex = FormatDaxItemIndex;
                                break;
                            case SubPage.AnalyzeModel:
                                LastGoodSelectedIndex = AnalyzeModelItemIndex;
                                break;
                            default:
                                break;
                        }

                        if (SelectedTab.ConnectionType != BiConnectionType.UnSelected)
                        {
                            SelectedTab.ShowSubPage(SelectedItem.SubPageInTab);
                        }
                    }
                }
                else
                {
                    // If an item that isn't enabled is selected put the selection indicator back where it was
                    SelectedItem = MenuItems.FirstOrDefault(mi => mi.Name == LastNavigation?.Name);
                    SelectedIndex = LastGoodSelectedIndex;
                }
            }
        }
    }
}
