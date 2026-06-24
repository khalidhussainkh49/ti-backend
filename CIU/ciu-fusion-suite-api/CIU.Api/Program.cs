using CIU.Application.Interfaces;
using CIU.Application.Services;
using CIU.Infrastructure.Data;
using CIU.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;
using CIU.SignalR;

var builder = WebApplication.CreateBuilder(args);

// PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// DI
builder.Services.AddScoped<IIntelligenceService, IntelligenceService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();



var app = builder.Build();
app.MapHub<IntelligenceHub>(
    "/hubs/intelligence"
);


// Seed Default Admin
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    if (!context.Users.Any())
    {
        context.Users.Add(new User
        {
            Username = "admin",
            Email = "admin@ciu.local",
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin123!"),
            Role = "SUPER_ADMIN"
        });

        context.SaveChanges();
    }
}

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();