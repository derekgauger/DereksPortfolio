using MongoDB.Driver;
using MongoDbProject.Core.Models;

namespace MongoDbProject.Core.Repositories
{
    public class EducationRepository
    {
        private readonly IMongoCollection<Education> _education;

        public EducationRepository(IMongoDatabase database)
        {
            _education = database.GetCollection<Education>("Education");
        }

        public async Task<List<Education>> GetAllEducationAsync()
        {
            return await _education.Find(_ => true).ToListAsync();
        }

        public async Task InsertProjectAsync(Education education)
        {
            await _education.InsertOneAsync(education);
        }
    }
}