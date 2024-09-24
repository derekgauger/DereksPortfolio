
using Microsoft.AspNetCore.Mvc;
using MongoDbProject.Core.Models;
using MongoDbProject.Core.Repositories;

namespace MongoDbProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillController : ControllerBase
    {
        private readonly SkillRepository _repository;

        public SkillController(SkillRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Skill>>> GetAllSkills()
        {
          var projects = await _repository.GetAllSkillsAsync();
          return Ok(projects);
        }
    }
}