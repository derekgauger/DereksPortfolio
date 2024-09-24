using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MongoDbProject.Core.Models
{
    public class Skill
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Years { get; set; }
        public string IconName { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }


        public Skill()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}