using BookingManagementPlatform.Server.ToqaIDataService;
using BookingManagementPlatform.Server.ToqaDataService;
using BookingManagementPlatform.Server.Models;
using Microsoft.EntityFrameworkCore;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.DataServicee;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));

builder.Services.AddScoped<TIDataService, TDataService>();

builder.Services.AddScoped<IANASDataSER, ANASDataSER>();


//CORS



builder.Services.AddCors(
    options => options.AddPolicy(
        "Develop", options => 
        {
            options.AllowAnyOrigin(); 
            options.AllowAnyMethod();
            options.AllowAnyHeader();
        }
        )
    );

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = null;
    });


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("Develop");
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
