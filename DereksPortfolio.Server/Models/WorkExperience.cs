using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MongoDbProject.Core.Models
{
    public class WorkExperience
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string DateRange { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public List<string> BulletPoints { get; set; }


        public WorkExperience()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}