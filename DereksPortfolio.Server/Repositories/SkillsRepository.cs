using MongoDB.Driver;
using MongoDbProject.Core.Models;

namespace MongoDbProject.Core.Repositories
{
    public class SkillRepository
    {
        private readonly IMongoCollection<Skill> _skills;

        public SkillRepository(IMongoDatabase database)
        {
            _skills = database.GetCollection<Skill>("Skills");
        }

        public async Task<List<Skill>> GetAllSkillsAsync()
        {
            return await _skills.Find(_ => true).ToListAsync();
        }
    }
}