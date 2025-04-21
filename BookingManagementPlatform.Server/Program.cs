using BookingManagementPlatform.Server.Models;
using Microsoft.EntityFrameworkCore;
using BookingManagementPlatform.Server.IDataSerivcee;
using BookingManagementPlatform.Server.DataServicee;
using BookingManagementPlatform.Server.DTOs;
using BookingManagementPlatform.Server.UserServicee;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});


builder.Services.AddScoped<IOmarService, OmarService>();
builder.Services.AddScoped<IUserServicee, UserService>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IDataServiceJana, DataServiceJana>();
builder.Services.AddScoped<TIDataService, TDataService>();
builder.Services.AddScoped<IANASDataSER, ANASDataSER>();

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

builder.Services.AddHttpContextAccessor();
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
app.UseSession();
app.MapFallbackToFile("/index.html");

app.Run();
