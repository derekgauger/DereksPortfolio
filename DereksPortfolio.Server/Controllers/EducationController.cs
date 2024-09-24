using Microsoft.AspNetCore.Mvc;
using MongoDbProject.Core.Models;
using MongoDbProject.Core.Repositories;

namespace MongoDbProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EducationController : ControllerBase
    {
        private readonly EducationRepository _repository;

        public EducationController(EducationRepository repository)
        {
            _repository = repository;
        }

        [Produces("application/json")]
        [HttpGet]
        public async Task<ActionResult<List<Education>>> GetAllEducation()
        {
          var education = await _repository.GetAllEducationAsync();
          return Ok(education);
        }
    }
}