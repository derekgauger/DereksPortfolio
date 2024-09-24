using MongoDB.Driver;
using MongoDbProject.Core.Models;

namespace MongoDbProject.Core.Repositories
{
    public class WorkExperienceRepository
    {
        private readonly IMongoCollection<WorkExperience> _workExperience;

        public WorkExperienceRepository(IMongoDatabase database)
        {
            _workExperience = database.GetCollection<WorkExperience>("WorkExperience");
        }

        public async Task<List<WorkExperience>> GetAllWorkExperiencesAsync()
        {
            return await _workExperience.Find(_ => true).ToListAsync();
        }

        public async Task InsertProjectAsync(WorkExperience workExperience)
        {
            await _workExperience.InsertOneAsync(workExperience);
        }
    }
}