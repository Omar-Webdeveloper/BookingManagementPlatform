using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BookingManagementPlatform.Server.Models;

public partial class MyDbContext : DbContext
{
    public MyDbContext()
    {
    }

    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<ContactUsMessage> ContactUsMessages { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<RoomsCategory> RoomsCategories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-5RUPPFV;Database=book;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PK__Bookings__73951AED68F27315");

            entity.Property(e => e.BookingEndDate).HasColumnName("Booking_end_date");
            entity.Property(e => e.BookingEndTime).HasColumnName("Booking_end_time");
            entity.Property(e => e.BookingStartDate).HasColumnName("Booking_start_date");
            entity.Property(e => e.BookingStartTime).HasColumnName("Booking_start_time");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.Room).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.RoomId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Bookings__RoomId__52593CB8");

            entity.HasOne(d => d.User).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Bookings__UserId__5165187F");
        });

        modelBuilder.Entity<ContactUsMessage>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ContactU__3214EC077B976FD3");

            entity.Property(e => e.ClinetName).HasMaxLength(500);
            entity.Property(e => e.Email).HasMaxLength(500);
            entity.Property(e => e.Message).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(500);
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Payment__3213E83F53D307CC");

            entity.ToTable("Payment");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.Cardnumber)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("cardnumber");
            entity.Property(e => e.Cvc)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasColumnName("CVC");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("payment_method");

            entity.HasOne(d => d.Booking).WithMany(p => p.Payments)
                .HasForeignKey(d => d.BookingId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Payment__booking__5812160E");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Review__3213E83F11F1FA29");

            entity.ToTable("Review");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.Review1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("review");

            entity.HasOne(d => d.Booking).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.BookingId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Review__booking___5535A963");
        });

        modelBuilder.Entity<Room>(entity =>
        {
            entity.HasKey(e => e.RoomId).HasName("PK__Rooms__3286393974E88966");

            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.Lighting)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("lighting");
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.MusicLevel)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("music_level");
            entity.Property(e => e.Seating)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("seating");
            entity.Property(e => e.ServiceImage)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.ServiceName).HasMaxLength(100);
            entity.Property(e => e.ViewLook)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("view_Look");

            entity.HasOne(d => d.Category).WithMany(p => p.Rooms)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK__Rooms__CategoryI__4E88ABD4");
        });

        modelBuilder.Entity<RoomsCategory>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__RoomsCat__19093A0B73129492");

            entity.Property(e => e.CategoryName).HasMaxLength(100);
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Image)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("image");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C349895CF");

            entity.HasIndex(e => e.Email, "UQ__Users__A9D105342F974F9D").IsUnique();

            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FullName).HasMaxLength(100);
            entity.Property(e => e.Image)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.PasswordHash).HasMaxLength(255);
            entity.Property(e => e.PhoneNumber).HasMaxLength(15);
            entity.Property(e => e.Role).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
