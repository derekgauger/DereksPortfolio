
using DereksPortfolio.Server.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDbProject.Core.Models;
using MongoDbProject.Core.Repositories;

namespace MongoDbProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SummaryController : ControllerBase
    {
        private readonly SummaryRepository _repository;

        public SummaryController(SummaryRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Summary>>> GetSummary()
        {
          var projects = await _repository.GetSummaryAsync();
          return Ok(projects);
        }
    }
}