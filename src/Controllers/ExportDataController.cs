﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sqlbi.Bravo.Infrastructure.Helpers;
using Sqlbi.Bravo.Models;
using Sqlbi.Bravo.Services;
using System.Net.Mime;
using System.Threading;
using System.Threading.Tasks;

namespace Sqlbi.Bravo.Controllers
{
    /// <summary>
    /// Export data controller
    /// </summary>
    /// <response code="400">Status400BadRequest - See the "instance" and "detail" properties to identify the specific occurrence of the problem</response>
    [Route("api/[action]")]
    [ApiController]
    [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
    public class ExportDataController : ControllerBase
    {
        private readonly IExportDataService _exportDataService;
        private readonly IPBICloudService _pbicloudService;

        public ExportDataController(IExportDataService exportDataService, IPBICloudService pbicloudService)
        {
            _exportDataService = exportDataService;
            _pbicloudService = pbicloudService;
        }

        /// <summary>
        /// Exports tables from a <see cref="PBIDesktopReport"/> using the provided <see cref="ExportDelimitedTextSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        [HttpPost]
        [ActionName("ExportCsvFromReport")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ExportResult))]
        [ProducesDefaultResponseType]
        public IActionResult ExportDelimitedTextFileFromPBIDesktopReport(ExportDelimitedTextFromPBIReportRequest request, CancellationToken cancellationToken)
        {
            var dialogResult = WindowDialogHelper.BrowseFolderDialog(cancellationToken);
            if (dialogResult.Canceled == false)
            {
                request.Settings!.ExportPath = dialogResult.Path!;
                _exportDataService.ExportDelimitedTextFile(request.Report!, request.Settings!, cancellationToken);
            }

            return Ok(dialogResult);
        }

        /// <summary>
        /// Exports tables from a <see cref="PBICloudDataset"/> using the provided <see cref="ExportDelimitedTextSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        /// <response code="401">Status401Unauthorized - Sign-in required</response>
        [HttpPost]
        [ActionName("ExportCsvFromDataset")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ExportResult))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> ExportDelimitedTextFileFromPBICloudDataset(ExportDelimitedTextFromPBICloudDatasetRequest request, CancellationToken cancellationToken)
        {
            if (await _pbicloudService.IsSignInRequiredAsync())
                return Unauthorized();

            var dialogResult = WindowDialogHelper.BrowseFolderDialog(cancellationToken);
            if (dialogResult.Canceled == false)
            {
                request.Settings!.ExportPath = dialogResult.Path!;
                _exportDataService.ExportDelimitedTextFile(request.Dataset!, request.Settings!, cancellationToken);
            }

            return Ok(dialogResult);
        }

        /// <summary>
        /// Exports tables from a <see cref="PBIDesktopReport"/> using the provided <see cref="ExportExcelSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        [HttpPost]
        [ActionName("ExportXlsxFromReport")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesDefaultResponseType]
        public IActionResult ExportExcelFileFromPBIDesktopReport(ExportExcelFromPBIReportRequest request, CancellationToken cancellationToken)
        {
            var dialogResult = WindowDialogHelper.SaveFileDialog(fileName: request.Report!.ReportName, defaultExt: "XLSX", cancellationToken);
            if (dialogResult.Canceled == false)
            {
                request.Settings!.ExportPath = dialogResult.Path!;
                _exportDataService.ExportExcelFile(request.Report, request.Settings, cancellationToken);
            }

            return Ok(dialogResult);
        }

        /// <summary>
        /// Exports tables from a <see cref="PBICloudDataset"/> using the provided <see cref="ExportExcelSettings"/> format settings 
        /// </summary>
        /// <response code="200">Status200OK - Success</response>
        /// <response code="401">Status401Unauthorized - Sign-in required</response>
        [HttpPost]
        [ActionName("ExporXlsxFromDataset")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> ExportExcelFileFromPBICloudDataset(ExportExcelFromPBICloudDatasetRequest request, CancellationToken cancellationToken)
        {
            if (await _pbicloudService.IsSignInRequiredAsync())
                return Unauthorized();
            
            var dialogResult = WindowDialogHelper.SaveFileDialog(fileName: request.Dataset!.DisplayName, defaultExt: "XLSX", cancellationToken);
            if (dialogResult.Canceled == false)
            {
                request.Settings!.ExportPath = dialogResult.Path!;
                _exportDataService.ExportExcelFile(request.Dataset, request.Settings, cancellationToken);
            }

            return Ok(dialogResult);
        }
    }
}
