using MongoDB.Driver;
using MongoDbProject.Core.Models;

namespace MongoDbProject.Core.Repositories
{
    public class ProjectRepository
    {
        private readonly IMongoCollection<Project> _projects;

        public ProjectRepository(IMongoDatabase database)
        {
            _projects = database.GetCollection<Project>("Projects");
        }

        public async Task<List<Project>> GetAllProjectsAsync()
        {
            return await _projects.Find(_ => true).ToListAsync();
        }
        
        public async Task InsertProjectAsync(Project project)
        {
            await _projects.InsertOneAsync(project);
        }
    }
}