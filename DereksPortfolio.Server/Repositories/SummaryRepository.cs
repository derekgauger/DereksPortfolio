using MongoDB.Driver;
using MongoDbProject.Core.Models;

namespace MongoDbProject.Core.Repositories
{
    public class SummaryRepository
    {
        private readonly IMongoCollection<Summary> _summary;

        public SummaryRepository(IMongoDatabase database)
        {
            _summary = database.GetCollection<Summary>("Summary");
        }

        public async Task<Summary> GetSummaryAsync()
        {
            return await _summary.Find(_ => true).FirstOrDefaultAsync();
        }
    }
}