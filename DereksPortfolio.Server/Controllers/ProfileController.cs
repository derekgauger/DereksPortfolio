
using Microsoft.AspNetCore.Mvc;
using MongoDbProject.Core.Models;
using MongoDbProject.Core.Repositories;

namespace MongoDbProject.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly ProfileRepository _repository;

        public ProfileController(ProfileRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Profile>>> GetProfile()
        {
          var profile = await _repository.GetProfileAsync();
          return Ok(profile);
        }
    }
}