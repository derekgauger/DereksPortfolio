using Microsoft.AspNetCore.Mvc;
using MongoDbProject.Core.Models;
using MongoDbProject.Core.Repositories;

namespace MongoDbProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkExperienceController : ControllerBase
    {
        private readonly WorkExperienceRepository _repository;

        public WorkExperienceController(WorkExperienceRepository repository)
        {
            _repository = repository;
        }

        [Produces("application/json")]
        [HttpGet]
        public async Task<ActionResult<List<WorkExperience>>> GetAllWorkExperiences()
        {
          var workExperience = await _repository.GetAllWorkExperiencesAsync();
          return Ok(workExperience);
        }
    }
}