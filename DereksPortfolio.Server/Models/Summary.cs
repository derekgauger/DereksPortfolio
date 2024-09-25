using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MongoDbProject.Core.Models
{
    public class Summary
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Summary()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}