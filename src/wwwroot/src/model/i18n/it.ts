/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {
    
    locale: "it", //DO NOT TRANSLATE
    enName: "Italian", //DO NOT TRANSLATE

    name: "Italiano",
    
    strings: {
        [_.addCtrlTitle]: "Apri",
        [_.aggregatedTableName]: "Tabelle multiple",
        [_.AnalyzeModel]: "Analizza Modello",
        [_.analyzeModelSummary]: `Il tuo dataset è grande <strong>{size:bytes}</strong> e contiene <strong>{count}</strong> {{colonne|colonna}}`,
        [_.analyzeModelSummary2]: `, di cui <span class="text-highlight"><strong>{count}</strong> non {{sono referenziate|è referenziata}} nel modello.</span>`,
        [_.appName]: "Bravo for Power BI",
        [_.appUpdateAvailable]: "Nuova versione disponibile: {version}",
        [_.appUpdateChangelog]: "Changelog",
        [_.appUpdateDownload]: "Download",
        [_.appUpdateViewDetails]: "Vedi dettagli",
        [_.appUpToDate]: "Bravo è aggiornato!",
        [_.appVersion]: "Versione {version}",
        [_.BestPractices]: "Raccomandazioni",
        [_.canceled]: "Annullato",
        [_.clearCtrlTitle]: "Svuota",
        [_.closeCtrlTitle]: "Chiudi",
        [_.closeOtherTabs]: "Chiudi le altre",
        [_.closeTab]: "Chiudi",
        [_.collapseAllCtrlTitle]: "Nascondi tutto",
        [_.columnExportedCompleted]: "Questa tabella è stata esportata con successo.",
        [_.columnExportedFailed]: "Questa tabella non è stata esportata per qualche errore non specificato.",
        [_.columnExportedTruncated]: "Questa tabella è stata troncata perché il numero di righe ha superato il limite massimo consentito.",
        [_.columnMeasureFormatted]: "Questa misura è già formattata.",
        [_.columnMeasureNotFormattedTooltip]: "Questa misura non è formattata.",
        [_.columnMeasureWithError]: "Questa misura contiene degli errori.",
        [_.columnUnreferencedExplanation]: `<span class="text-highlight">Le colonne non referenziate</span> possono essere generalmente rimosse dal modello per ottimizzare le prestazioni. Prima di rimuoverle, però, verifica che non siano usate in nessun report, perché Bravo non non è in grado di saperlo.`,
        [_.columnUnreferencedTooltip]: "Questa colonna non è referenziata nel tuo modello.",
        [_.confirmTabCloseMessage]: "Alcune modifiche non sono state salvate.<br>Sicuro di voler chiudere?",
        [_.connectBrowse]: "Esplora",
        [_.connectDatasetsTableEndorsementCol]: "Approvazione",
        [_.connectDatasetsTableNameCol]: "Nome",
        [_.connectDatasetsTableOwnerCol]: "Proprietario",
        [_.connectDatasetsTableWorkspaceCol]: "Workspace",
        [_.connectDialogAttachPBIMenu]: "Dataset su powerbi.com",
        [_.connectDialogConnectPBIMenu]: "Report Attivi su Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "File VPAX",
        [_.connectDialogTitle]: "Apri",
        [_.connectDragFile]: "Trascina un file VPAX qui<br>oppure cerca un file sul tuo computer",
        [_.connectNoReports]: "Nessun report attivo disponibile.<br>Apri un report con Power BI Desktop e aspetta che appaia qui.",
        [_.copiedErrorDetails]: "Copiato!",
        [_.copy]: "Copia",
        [_.copyErrorDetails]: "Copia Errore",
        [_.copyFormulaCtrlTitle]: "Copia la misura formattata",
        [_.copyMessage]: "Copia Messaggio",
        [_.copyright]: "Tutti i diritti sono riservati.",
        [_.createIssue]: "Segnala Problema",
        [_.cut]: "Taglia",
        [_.dataUsageLink]: "Come sono usati i tuoi dati?", 
        [_.dataUsageMessage]: `Per formattare il codice DAX, Bravo deve inviare le misure di questo modello a DAX Formatter (un servizio gestito da SQLBI) attraverso una connessione sicura.<p><strong>Il servizio non salva i tuoi dati da nessuna parte.</strong></p><p>Alcune informazioni, come le funzioni DAX più usate, un indice di complessità e la media della lunghezza delle query ricevute, possono essere salvate per successive analisi.</p>`,
        [_.dataUsageTitle]: "Come sono usati i tuoi dati?",
        [_.DaxFormatter]: "Formatta DAX",
        [_.daxFormatterAgreement]: "Per formattare il codice DAX, Bravo ha bisogno di inviare le tue misure a DAX Formatter.",
        [_.daxFormatterAutoPreviewOption]: "Anteprima automatica",
        [_.daxFormatterFormat]: "Formatta",
        [_.daxFormatterFormatDisabled]: "Formatta (Non Supportato)",
        [_.daxFormatterFormattedCode]: "Formattata (Anteprima)",
        [_.daxFormatterOriginalCode]: "Attuale",
        [_.daxFormatterPreviewAllButton]: "Anteprima di tutte le misure",
        [_.daxFormatterPreviewButton]: "Anteprima",
        [_.daxFormatterPreviewDesc]: "Per generare un'anteprima, Bravo deve inviare questa misura a DAX Formatter.",
        [_.daxFormatterSuccessSceneMessage]: "Congratulazioni, <strong>{count} misur{{e|a}}</strong> {{sono state formattate|è stata formattata}} correttamente.",
        [_.daxFormatterSummary]: "Il dataset contiene <strong>{count} misur{{e|a}}</strong> che {{possono essere formattate|può essere formattata}}.",
        [_.defaultTabName]: "Senza nome",
        [_.dialogCancel]: "Annulla",
        [_.dialogOK]: "OK",
        [_.dialogOpen]: "Apri",
        [_.docLimited]: "Limitato",
        [_.docLimitedTooltip]: "Non tutte le funzionalità sono disponibili per questo documento.",
        [_.doneCtrlTitle]: "Completato",
        [_.emailAddress]: "Indirizzo Email",
        [_.emailAddressPlaceholder]: "Inserisci il tuo indirizzo email",
        [_.error]: "Errore",
        [_.errorAborted]: "Operazione annullata.",
        [_.errorAnalysisServicesConnectionFailed]: "Si è verificato un problema di connessione tra il server e Bravo.",
        [_.errorConnectionUnsupported]: "La connessione alla risorsa richiesta non è supportata.",
        [_.errorDatasetConnectionUnknown]: "Connessione non specificata.",
        [_.errorDatasetConnectionUnsupportedExcelWorkbookDataset]: "La connessione a un foglio di lavoro di Excel non è supportata.", 
        [_.errorDatasetConnectionUnsupportedLiveConnectionToExternalDatasets]: "I dataset basati su una connessione live a un dataset di Power BI su un diverso workspace non sono supportati.", 
        [_.errorDatasetConnectionUnsupportedOnPremLiveConnection]: "I dataset basati su una connessione live a un modello di Azure Analysis Services o SQL Server Analysis Services non sono supportati.",
        [_.errorDatasetConnectionUnsupportedPersonalWorkspace]: "I workspace personali non sono supportati.",
        [_.errorDatasetConnectionUnsupportedPushDataset]: "I dataset con Push data non sono supportati.",
        [_.errorDatasetConnectionUnsupportedWorkspaceSku]: "Workspace capacity SKU non è supportato.",
        [_.errorDatasetsEmptyListing]: "Nessun altro dataset disponibile.",
        [_.errorDatasetsListing]: "Impossibile recuperare la lista dei tuoi dataset su Power BI Service.",
        [_.errorExportDataFileError]: "Si è verificato un problema durante l'esportazione. Riprova.",
        [_.errorManageDateTemplateError]: "Si è verificato un problema durante l'esecuzione del processo DAX template.",
        [_.errorNetworkError]: "Non sei connesso a Internet.",
        [_.errorNone]: "Errore non specificato.",
        [_.errorNotAuthorized]: "Non sei autorizzato ad accedere alla risorsa.",
        [_.errorNotConnected]: "Non sei connesso a Power BI - Accedi per continuare.",
        [_.errorNotFound]: "Impossibile connettersi alla risorsa.",
        [_.errorReportConnectionUnknown]: "Connessione invalida.",
        [_.errorReportConnectionUnsupportedAnalysisServecesCompatibilityMode]: "La compatibilità dell'istanza di Power BI Desktop Analysis Services non è PowerBI.",
        [_.errorReportConnectionUnsupportedAnalysisServecesConnectionNotFound]: "Connessione TCP a Power BI Desktop Analysis Services non trovata.",
        [_.errorReportConnectionUnsupportedAnalysisServecesProcessNotFound]: "Istanza di Power BI Desktop Analysis Services non trovata.", 
        [_.errorReportConnectionUnsupportedConnectionException]: "Si è verificato un problema durante la connessione all'istanza di Power BI Desktop Analysis Services.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionIsEmpty]: "L'istanza di Power BI Desktop Analysis Services non contiene nessun database. Prova a connetterti al report cliccando sull'icona di Bravo negli Strumenti Esterni di Power BI.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "L'istanza di Power BI Desktop Analysis Services contiene un numero inaspettato di database (> 1).",
        [_.errorReportConnectionUnsupportedProcessNotYetReady]: "Power BI Desktop è in fase di apertura o l'istanza di Analysis Services non è ancora avviata.", 
        [_.errorReportsEmptyListing]: "Nessun altro report disponibile.",
        [_.errorReportsListing]: "Impossibile connettersi a Power BI Desktop.<br>Prova a riavviare l'applicazione.",
        [_.errorRetry]: "Riprova",
        [_.errorSignInMsalExceptionOccurred]: "Errore inaspettato durante l'accesso.",
        [_.errorSignInMsalTimeoutExpired]: "La richiesta di accesso è stata annullata perché è passato troppo tempo prima che l'operazione venisse completata.",
        [_.errorTimeout]: "Timeout.",
        [_.errorTitle]: "Oops...",
        [_.errorTOMDatabaseDatabaseNotFound]: "Il database non esiste o l'utente non ha le autorizzazioni per accedervi.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "La richiesta di aggiornamento è fallita perché in conflitto con lo stato attuale della risorsa.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "La richiesta di aggiornamento è fallita perché una o più misure contengono errori.", 
        [_.errorTOMDatabaseUpdateFailed]: "La richiesta di aggiornamento è fallita mentre le modifiche locali venivano sincronizzate con il database remoto.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `La richiesta di aggiornamento è fallita perché queste misure contengono degli errori:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Errore non gestito - Invia una segnalazione includendo il trace id se disponibile.",
        [_.errorUnspecified]: "Errore non specificato.",
        [_.errorUserSettingsSaveError]: "Impossibile salvare le opzioni.",
        [_.errorVpaxFileContainsCorruptedData]: "Il formato del file VPAX file non è valido o contiene dati corrotti.",
        [_.expandAllCtrlTitle]: "Mostra tutto",
        [_.ExportData]: "Esporta Dati",
        [_.exportDataCSVCustomDelimiter]: "Delimitatore personalizzato",
        [_.exportDataCSVDelimiter]: "Delimitatore",
        [_.exportDataCSVDelimiterComma]: "Virgola",
        [_.exportDataCSVDelimiterDesc]: `Seleziona il carattere da usare come delimitatore dei campi. <em>Automatico</em> usa il carattere predefinito di sistema.`,
        [_.exportDataCSVDelimiterOther]: "Altro...",
        [_.exportDataCSVDelimiterPlaceholder]: "Carattere",
        [_.exportDataCSVDelimiterSemicolon]: "Punto e Virgola",
        [_.exportDataCSVDelimiterSystem]: "Automatico",
        [_.exportDataCSVDelimiterTab]: "Tab",
        [_.exportDataCSVEncoding]: "Codifica",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVQuote]: "Stringhe tra virgolette",
        [_.exportDataCSVQuoteDesc]: "Racchiudi tutte le stringhe tra virgolette.",
        [_.exportDataExcelCreateExportSummary]: "Foglio di Riepilogo ",
        [_.exportDataExcelCreateExportSummaryDesc]: "Aggiungi un foglio al file Excel con il riepilogo del processo.",
        [_.exportDataExport]: "Esporta",
        [_.exportDataExportAs]: "Esporta come",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "Esportazione {table} in corso...",
        [_.exportDataExportingDone]: "Completato!",
        [_.exportDataNoColumns]: "Questa tabella non può essere esportata perché non contiene nessuna colonna.",
        [_.exportDataOpenFile]: "Apri file",
        [_.exportDataOpenFolder]: "Apri cartella",
        [_.exportDataOptions]: "Opzioni",
        [_.exportDataStartExporting]: "Inizializzazione...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} tabell{{e|a}}</strong> {{sono state esportate|è stata esportata}} correttamente.",
        [_.exportDataSummary]: "Il dataset contiene <strong>{count} tabell{{e|a}}</strong> che {{possono|può}} essere esportat{{e|a}}.",
        [_.exportDataTypeCSV]: "CSV (Valori separati da virgola)",
        [_.exportDataTypeXLSX]: "Foglio di calcolo Excel",
        [_.failed]: "Fallito",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Mostra solo misure non formattate o con errori",
        [_.filterUnrefCtrlTitle]: "Mostra solo colonne non referenziate.",
        [_.formattingMeasures]: "Formattazione in corso...",
        [_.goBackCtrlTitle]: "Annulla e torna indietro",
        [_.groupByTableCtrlTitle]: "Raggruppa per Tabella",
        [_.helpConnectVideo]: "Come connettersi",
        [_.helpCtrlTitle]: "Aiuto",
        [_.hideUnsupportedCtrlTitle]: "Solo supportati",
        [_.less]: "Meno",
        [_.license]: "Rilasciato con licenza MIT.",
        [_.loading]: "Caricamento...",
        [_.ManageDates]: "Gestisci Date",
        [_.manageDatesApplyCtrlTitle]: "Applica",
        [_.manageDatesAutoScan]: "Scansione Date",
        [_.manageDatesAutoScanActiveRelationships]: "Relazioni Attive",
        [_.manageDatesAutoScanDesc]: "Scegli come determinare l'intervallo di date del modello. Seleziona <em>Automatica</em> per scansionare tutte le colonne contenenti date. Imposta <em>Scegli Colonne...</em> per selezionare le colonne da usare. Imposta <em>Relazioni Attive</em> e <em>Relazioni Inattive</em> per scansionare solo le colonne con relazioni. Imposta <em>Disabilitata</em> per indicare anno di inizio e fine.",
        [_.manageDatesAutoScanDisabled]: "Disabilitata",
        [_.manageDatesAutoScanFirstYear]: "Primo Anno",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "Automatica",
        [_.manageDatesAutoScanInactiveRelationships]: "Relazioni Inattive",
        [_.manageDatesAutoScanLastYear]: "Ultimo Anno",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "Scegli Colonne...",
        [_.manageDatesCalendarDesc]: "Scegli un tipo di calendario da applicare al modello. Bravo creerà le tabelle necessarie o le aggiornerà, mantenendo attive le relazioni esistenti.", 
        [_.manageDatesCalendarTemplateName]: "Calendario",
        [_.manageDatesCalendarTemplateNameDesc]: "Scegli <em>Mensile</em> per calendari basati su un numero di mesi variabile. Imposta <em>Settimanale</em> per calendari 445-454-544-ISO. Usa <em>Personalizzato</em> per calendari flessibili di lunghezza variabile.",
        [_.manageDatesDatesDesc]: "Seleziona il formato e dove posizionare le date nel modello.",
        [_.manageDatesDatesTableDesc]: "Questa è la tabella da usare nei report per le date.",
        [_.manageDatesDatesTableName]: "Tabella Date",
        [_.manageDatesDatesTableReferenceDesc]: "Questa è una tabella nascosta contenente tutto il codice DAX necessario a generare le date.",
        [_.manageDatesDatesTableReferenceName]: "Tabella Definizione Date",
        [_.manageDatesHolidaysDesc]: "Aggiungi le vacanze al tuo modello. Bravo creerà le tabelle necessarie o le aggiornerà, mantenendo attive le relazioni esistenti.",
        [_.manageDatesHolidaysEnabledDesc]: "Aggiungi la tabella vacanze al tuo modello.",
        [_.manageDatesHolidaysEnabledName]: "Vacanze",
        [_.manageDatesHolidaysTableDefinitionDesc]: "Questa è una tabella nascosta contenente tutto il codice DAX necessario a generare le vacanze.",
        [_.manageDatesHolidaysTableDefinitionName]: "Tabella Definizione Vacanze",
        [_.manageDatesHolidaysTableDesc]: "Questa è la tabella da usare nei report per le vacanze.",
        [_.manageDatesHolidaysTableName]: "Tabella Vacanze",
        [_.manageDatesIntervalDesc]: "Scegli un intervallo di date per il tuo modello.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "Paese Vacanze",
        [_.manageDatesISOCustomFormatDesc]: "Inserisci un formato internazionale utilizzando la notazione IETF BCP 47. Es. it-IT",
        [_.manageDatesISOCustomFormatName]: "Altro Formato",
        [_.manageDatesISOFormatDesc]: "Scegli il formato locale da usare per le date.",
        [_.manageDatesISOFormatName]: "Formato Date",
        [_.manageDatesISOFormatOther]: "Altro...",
        [_.manageDatesISOFormatOtherPlaceholder]: "Formato",
        [_.manageDatesMenuCalendar]: "Calendario",
        [_.manageDatesMenuDates]: "Date",
        [_.manageDatesMenuHolidays]: "Vacanze",
        [_.manageDatesMenuInterval]: "Intervallo",
        [_.manageDatesMenuTimeIntelligence]: "Time Intelligence",
        [_.manageDatesModelCheck]: "Verifica Modello",
        [_.manageDatesPreviewCtrlTitle]: "Anteprima",
        [_.manageDatesPreviewLoading]: "Caricamento anteprima...",
        [_.manageDatesStatusCompatible]: `<div class="hero">Questo modello <b>contiene già delle tabelle data compatibili</b> con Bravo.</div>Se applichi qualche modifica, queste tabelle verranno aggiornate ma le relazioni rimarranno intatte.`,
        [_.manageDatesStatusIncompatible]: `<div class="hero">Questo modello <b>contiene alcune tabelle non compatibili</b> con Bravo.</div>Per apportare qualche modifica, devi scegliere un nome diverso per una o più delle tabelle create da questo tool.<br><br>Verifica <b>Date</b> e <b>Vacanze</b>.`,
        [_.manageDatesStatusOk]: `<div class="hero">Questo modello <b>non contiene alcuna tabella data</b>.</div>Questa funzionalità non influenzerà alcuna misura o report esistenti.`,
        [_.manageDatesTemplateFirstDayOfWeek]: "Primo Giorno della Settimana",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "Per calendari settimanali ISO, usa <em>Lunedì</em>.",
        [_.manageDatesTemplateFirstFiscalMonth]: "Primo Mese dell'Anno",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "Per calendari settimanali ISO, usa <em>Gennaio</em>.",
        [_.manageDatesTemplateMonthsInYear]: "Mesi nell'Anno",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "Standard",
        [_.manageDatesTemplateNameConfig02]: "Mensile",
        [_.manageDatesTemplateNameConfig03]: "Personalizzato",
        [_.manageDatesTemplateNameConfig04]: "Settimanale",
        [_.manageDatesTemplateQuarterWeekType]: "Sistema",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "Primo Giorno dell'Anno Fiscale",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "Scegli quando iniziare l'anno fiscale. Per calendari settimanali ISO, usa <em>Ultimo dell'Anno</em>.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "Primo dell'Anno",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "Ultimo dell'Anno",
        [_.manageDatesTemplateWeeklyType]: "Ultimo Giorno della Settimana dell'Anno",
        [_.manageDatesTemplateWeeklyTypeDesc]: "e la tua settimana inizia di Lunedì, l'ultimo giorno della settimana è Domenica. Se scegli <em>Ultimo dell'Anno</em>, l'anno fiscale finisce l'ultima Domenica dell'ultimo mese. Altrimenti, l'anno fiscale finisce la Domenica più vicina all'ultimo giorno dell'ultimo mese - potrebbe essere all'anno successivo. Per calendari settimanali ISO, usa <em>Più Vicino alla Fine dell'Anno</em>.",
        [_.manageDatesTemplateWeeklyTypeLast]: "Ultimo dell'Anno",
        [_.manageDatesTemplateWeeklyTypeNearest]: "Più Vicino alla Fine dell'Anno",
        [_.manageDatesTimeIntelligenceDesc]: "Crea le funzioni di Time Intelligence più comuni al tuo modello.",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Funzioni di Time Intelligence",
        [_.menuCtrlTitle]: "Mostra/Nascondi menu",
        [_.minimizeCtrlTitle]: "Riduci",
        [_.more]: "Di più",
        [_.notificationCtrlTitle]: "Notifiche",
        [_.notificationsTitle]: "{count} notific{{he|a}}",
        [_.openSourcePayoff]: "Bravo for Power BI è uno strumento open-source sviluppato e mantenuto da SQLBI e dalla comunità su Github. Contribuisci su",
        [_.openWithDaxFormatterCtrlTitle]: "Formatta online con DAX Formatter",  
        [_.optionAccount]: "Account Power BI",
        [_.optionAccountDescription]: "Imposta l'account per accedere ai dataset online di Power BI.",
        [_.optionDiagnostic]: "Diagnostica",
        [_.optionDiagnosticDescription]: "Mostra errori e log in un pannello apposito. Scegli <em>Base</em> per registrare solo alcuni messaggi (che verranno resi anonimi). <em>Integrale</em> registra invece tutti i messaggi (che rimarranno integrali).",
        [_.optionDiagnosticLevelBasic]: "Base",
        [_.optionDiagnosticLevelNone]: "Nessuna",
        [_.optionDiagnosticLevelVerbose]: "Integrale",
        [_.optionDiagnosticMore]: "Per segnalare bug nell'applicazione vai su",
        [_.optionFormattingBreaks]: "Separazione Nome-Espressione",
        [_.optionFormattingBreaksAuto]: "Auto",
        [_.optionFormattingBreaksDescription]: "Scegli come separare il nome della misura e l'espressione. Imposta <em>Auto</em> per scegliere automaticamente in base al modello.",
        [_.optionFormattingBreaksInitial]: "A Capo",
        [_.optionFormattingBreaksNone]: "Stessa Linea",
        [_.optionFormattingLines]: "Linee",
        [_.optionFormattingLinesDescription]: "Scegli se tenere le linee lunghe o corte.",
        [_.optionFormattingLinesValueLong]: "Linee lunghe",
        [_.optionFormattingLinesValueShort]: "Linee corte",
        [_.optionFormattingPreview]: "Anteprima Automatica",
        [_.optionFormattingPreviewDescription]: "Invia automaticamente le misure a DAX Formatter per generare le anteprime.",
        [_.optionFormattingSeparators]: "Separatori",
        [_.optionFormattingSeparatorsDescription]: "Scegli i separatori per i numeri e le liste.",
        [_.optionFormattingSeparatorsValueAuto]: "Auto",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "Spaziatura",
        [_.optionFormattingSpacesDescription]: "Gestisci gli spazi prima dei nomi delle funzioni.",
        [_.optionFormattingSpacesValueBestPractice]: "Raccomandato",
        [_.optionFormattingSpacesValueFalse]: "Nessuno spazio - IF( ",
        [_.optionFormattingSpacesValueTrue]: "Spazio - IF ( ",
        [_.optionLanguage]: "Lingua",
        [_.optionLanguageDescription]: "Scegli la lingua di Bravo. Riavvio richiesto.",
        [_.optionLanguageResetConfirm]: "Vuoi riavviare Bravo per applicare la nuova lingua?",
        [_.optionsDialogAboutMenu]: "Informazioni",
        [_.optionsDialogFormattingMenu]: "Formattazione",
        [_.optionsDialogGeneralMenu]: "Generale",
        [_.optionsDialogTelemetryMenu]: "Diagnostica",
        [_.optionsDialogTitle]: "Opzioni",
        [_.optionTelemetry]: "Telemetria",
        [_.optionTelemetryDescription]: "Invia informazioni di utilizzo anonime a SQLBI.",
        [_.optionTelemetryMore]: "Aiutaci a capire come gli utenti usano Bravo e come migliorarlo. Nessuna informazione personale è inviata o salvata. Nota che se l'opzione è disattivata non saremo in grado di fornire supporto su errori non gestiti.",
        [_.optionTheme]: "Tema",
        [_.optionThemeDescription]: "Imposta il tema di Bravo. Seleziona <em>Sistema</em> per usare il tema di sistema.",
        [_.optionThemeValueAuto]: "Sistema",
        [_.optionThemeValueDark]: "Scuro",
        [_.optionThemeValueLight]: "Chiaro",
        [_.otherColumnsRowName]: "Altre colonne...",
        [_.paste]: "Incolla",
        [_.powerBiSigninDescription]: "Accedi a Power BI Service per permette a Bravo di connettersi ai tuoi dataset.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Connetti a Power BI Desktop",
        [_.quickActionConnectPBITitle]: "Connetti a Power BI Service",
        [_.quickActionOpenVPXTitle]: "Apri un file di Vertipaq Analyzer",
        [_.refreshCtrlTitle]: "Aggiorna",
        [_.refreshPreviewCtrlTitle]: "Aggiorna anteprima",
        [_.saveVpaxCtrlTile]: "Salva come VPAX",
        [_.savingVpax]: "Generazione VPAX in corso...",
        [_.sceneUnsupportedDaxFormatterDesc]: "Non è possibile formattare il codice DAX sui file VPAX.",
        [_.sceneUnsupportedDesc]: "La funzionalità non è disponibile per questa fonte dati.",
        [_.sceneUnsupportedExportDataDesc]: "Solo i dati di report e dataset di Power BI possono essere esportati.",
        [_.sceneUnsupportedManageDatesDesc]: "Date e funzioni di Time Intelligence possono essere modificate solo su report connessi a un database locale di Power BI Desktop.",
        [_.sceneUnsupportedTitle]: "Non supportato",
        [_.searchColumnPlaceholder]: "Cerca Colunna",
        [_.searchDatasetPlaceholder]: "Cerca Dataset",
        [_.searchEntityPlaceholder]: "Search Tabella/Colonna",
        [_.searchMeasurePlaceholder]: "Cerca Misura",
        [_.searchTablePlaceholder]: "Cerca Tabella",
        [_.settingsCtrlTitle]: "Opzioni",
        [_.sheetOrphan]: "Non disponibile",
        [_.sheetOrphanPBIXTooltip]: "Il report è stato chiuso su Power BI Desktop. Qualunque operazione di scrittura è disabilitata.",
        [_.sheetOrphanTooltip]: "Questo modello non è più disponibile. Qualunque operazione di scrittura è disabilitata.",
        [_.showDiagnosticPane]: "Mostra Dettagli",
        [_.sideCtrlTitle]: "Visualizzazione affiancata",
        [_.signedInCtrlTitle]: "Autenticato come {name}",
        [_.signIn]: "Accedi",
        [_.signInCtrlTitle]: "Accedi",
        [_.signOut]: "Esci",
        [_.sqlbiPayoff]: "Bravo è un progetto di SQLBI.",
        [_.syncCtrlTitle]: "Sincronizza",
        [_.tableColCardinality]: "Cardinalità",
        [_.tableColCardinalityTooltip]: "Numero di elementi unici",
        [_.tableColColumn]: "Colonna",
        [_.tableColColumns]: "Colonne",
        [_.tableColPath]: "Tabella \\ Colonna",
        [_.tableColMeasure]: "Misura",
        [_.tableColRows]: "Righe",
        [_.tableColSize]: "Dimensioni",
        [_.tableColTable]: "Tabella",
        [_.tableColWeight]: "Impatto",
        [_.tableSelectedCount]: "{count} {{selezionate|selezionata}}",
        [_.tableValidationInvalid]: "Nome non valido.",
        [_.tableValidationValid]: "Questo nome è valido.",
        [_.themeCtrlTitle]: "Cambia Tema",
        [_.traceId]: "Trace Id",
        [_.unknownMessage]: "Messaggio Non Valido",
        [_.updateChannelBeta]: "Beta",
        [_.updateChannelCanary]: "Canary",
        [_.updateChannelDev]: "Dev",
        [_.updateChannelStable]: "Stable", 
        [_.updateMessage]: "Una nuova version di Bravo è disponibile: {version}",
        [_.validating]: "Validazione in corso...",
        [_.version]: "Versione",
        [_.welcomeHelpText]: "Guarda i video sotto per imparare a usare Bravo:",
        [_.welcomeHelpTitle]: "Come usare Bravo?",
        [_.welcomeText]: "Bravo è un comodo strumento per Power BI che può essere usato per analizzare i tuoi modelli, formattare le misure DAX, creare tabelle date ed esportare i dati.",
        [_.welcomeTitle]: "Bravo for Power BI",
    }
}
export default locale;