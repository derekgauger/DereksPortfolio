using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace MongoDbProject.Core.Models
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public List<string> Images { get; set; }
        public string PageDescription { get; set; }
        public string Description { get; set; }
        public List<ProjectTag> Tags { get; set; }
        public string DetailsUrl { get; set; }
        public List<ProjectUrl> Urls { get; set; }

        public Project()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}

public class ProjectTag
{
    public string Name { get; set; }
    public string Category { get; set; }
}

public class ProjectUrl
{
    public string Name { get; set; }
    public string Url { get; set; }
}