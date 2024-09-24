using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MongoDbProject.Core.Models
{
    public class Profile
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string Description1 { get; set; }
        public string Description2 { get; set; }
        public Content Content { get; set; }
        public Profile()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}

public class Content
{
    public string Favorite_Coding_Language { get; set; }
    public string Website { get; set; }
    public string Phone { get; set; }
    public string City { get; set; }
    public string Favorite_Food { get; set; }
    public string Degree { get; set; }
    public string Email { get; set; }
    public string Freelance { get; set; }
}