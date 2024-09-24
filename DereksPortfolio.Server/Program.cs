using MongoDB.Driver;
using MongoDbProject.Core.Data;
using MongoDbProject.Core.Models;
using MongoDbProject.Core.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("MongoDB");
var databaseName = builder.Configuration["MongoDB:DatabaseName"];
builder.Services.AddSingleton<IMongoClient>(sp => new MongoClient(connectionString));
builder.Services.AddScoped<IMongoDatabase>(sp => 
    sp.GetRequiredService<IMongoClient>().GetDatabase(databaseName));

builder.Services.AddScoped<ProjectRepository>();
builder.Services.AddScoped<EducationRepository>();
builder.Services.AddScoped<WorkExperienceRepository>();
builder.Services.AddScoped<SkillRepository>();
builder.Services.AddScoped<ProfileRepository>();

builder.Services.AddScoped<EmailService>();
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
// app.MapFallbackToFile("/index.html");

app.Run();
