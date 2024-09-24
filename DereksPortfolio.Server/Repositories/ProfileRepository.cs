using MongoDB.Driver;
using MongoDbProject.Core.Models;

namespace MongoDbProject.Core.Repositories
{
    public class ProfileRepository
    {
        private readonly IMongoCollection<Profile> _profile;

        public ProfileRepository(IMongoDatabase database)
        {
            _profile = database.GetCollection<Profile>("Profile");
        }

        public async Task<Profile> GetProfileAsync()
        {
            return await _profile.Find(_ => true).FirstOrDefaultAsync();
        }
    }
}