using BookingManagementPlatform.Server.Models;
using Microsoft.EntityFrameworkCore;
using BookingManagementPlatform.Server.DataServicee;
using BookingManagementPlatform.Server.IDataSerivcee;
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));
builder.Services.AddScoped<IOmarClass,OmarClass>();
// Add services to the container.


//CORS
builder.Services.AddCors(

    options => options.AddPolicy(
        "Develop", options =>
        {
            options.AllowAnyHeader();
            options.AllowAnyMethod();
            options.AllowAnyOrigin();
        }

        )
   );


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

app.UseAuthorization();

app.MapControllers();

// CORS
app.UseCors("Develop");

app.MapFallbackToFile("/index.html");

app.Run();
