﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sqlbi.Bravo.Infrastructure;
using Sqlbi.Bravo.Models;
using Sqlbi.Bravo.Services;
using System.Net.Mime;
using System.Threading.Tasks;

namespace Sqlbi.Bravo.Controllers
{
    [Route("auth/[action]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IPBICloudService _pbicloudService;

        public AuthenticationController(IPBICloudService pbicloudService)
        {
            _pbicloudService = pbicloudService;
        }

        /// <summary>
        /// Attempts to authenticate and acquire an access token for the account to access the PowerBI cloud services
        /// </summary>
        /// <response code="200">Status200OK</response>
        /// <response code="403">Status403Forbidden - sign-in cancelled by the system because the configured timeout period elapsed before the user completed the sign-in operation</response>
        /// <response code="424">Status424FailedDependency - sign-in failed, for details see the ErrorCode and the class Microsoft.Identity.Client.MsalError</response>
        [HttpGet]
        [ActionName("powerbi/SignIn")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BravoAccount))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(BravoSignInError))]
        [ProducesResponseType(StatusCodes.Status424FailedDependency, Type = typeof(BravoSignInError))]
        public async Task<IActionResult> PowerBISignIn()
        {
            try
            {
                var account = await _pbicloudService.SignInAsync();
                return Ok(account);
            }
            catch (BravoSignInTimeoutException)
            {
                return StatusCode(StatusCodes.Status403Forbidden, new BravoSignInError
                {
                    IsTimeoutElapsed = true
                });
            }
            catch (BravoSignInMsalException mex)
            {
                return StatusCode(StatusCodes.Status424FailedDependency, new BravoSignInError
                {
                    ErrorCode = mex.MsalErrorCode,
                });
            }
        }

        /// <summary>
        /// Clear the token cache for all the accounts
        /// </summary>
        /// <response code="200">Status200OK</response>
        [HttpGet]
        [ActionName("powerbi/SignOut")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> PowerBISignOut()
        {
            await _pbicloudService.SignOutAsync();
            return Ok();
        }
    }
}
