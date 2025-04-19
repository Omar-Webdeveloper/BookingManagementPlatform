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

    public virtual DbSet<Atmosphere> Atmospheres { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<ContactUsMessage> ContactUsMessages { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<RoomsCategory> RoomsCategories { get; set; }

    public virtual DbSet<Staff> Staff { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-T6EH1VU;Database=book;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Atmosphere>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Atmosphe__3213E83F2F31C9F6");

            entity.ToTable("Atmosphere");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Lighting)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("lighting");
            entity.Property(e => e.MusicLevel)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("music_level");
            entity.Property(e => e.RoomId).HasColumnName("room_id");
            entity.Property(e => e.Seating)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("seating");
            entity.Property(e => e.ViewLook)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("view_Look");

            entity.HasOne(d => d.Room).WithMany(p => p.Atmospheres)
                .HasForeignKey(d => d.RoomId)
                .HasConstraintName("FK__Atmospher__room___6FE99F9F");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PK__Bookings__73951AEDB7EFBA87");

            entity.Property(e => e.BookingEndDate).HasColumnName("Booking_end_date");
            entity.Property(e => e.BookingEndTime).HasColumnName("Booking_end_time");
            entity.Property(e => e.BookingStartDate).HasColumnName("Booking_start_date");
            entity.Property(e => e.BookingStartTime).HasColumnName("Booking_start_time");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasDefaultValue("Pending");

            entity.HasOne(d => d.Room).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.RoomId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Bookings__RoomId__4AB81AF0");

            entity.HasOne(d => d.User).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Bookings__UserId__49C3F6B7");
        });

        modelBuilder.Entity<ContactUsMessage>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ContactU__3214EC0776AD5970");

            entity.Property(e => e.ClinetName).HasMaxLength(500);
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(500);
            entity.Property(e => e.Message).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(500);
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Payment__3213E83FEED5EC2F");

            entity.ToTable("Payment");

            entity.Property(e => e.Id).HasColumnName("id");
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
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Payment__booking__72C60C4A");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Review__3213E83FEBA4E5E4");

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
                .HasConstraintName("FK__Review__booking___6D0D32F4");
        });

        modelBuilder.Entity<Room>(entity =>
        {
            entity.HasKey(e => e.RoomId).HasName("PK__Rooms__3286393921934DC9");

            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.ServiceImage)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.ServiceName).HasMaxLength(100);

            entity.HasOne(d => d.Category).WithMany(p => p.Rooms)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__Rooms__CategoryI__403A8C7D");
        });

        modelBuilder.Entity<RoomsCategory>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__RoomsCat__19093A0B2B5BC87A");

            entity.Property(e => e.CategoryName).HasMaxLength(100);
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<Staff>(entity =>
        {
            entity.HasKey(e => e.StaffId).HasName("PK__Staff__96D4AB17E661FB50");

            entity.HasIndex(e => e.Email, "UQ__Staff__A9D10534DC93284B").IsUnique();

            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FullName).HasMaxLength(100);
            entity.Property(e => e.PhoneNumber).HasMaxLength(15);
            entity.Property(e => e.Specialty).HasMaxLength(100);

            entity.HasOne(d => d.Category).WithMany(p => p.Staff)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__Staff__CategoryI__44FF419A");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4CFA7F9855");

            entity.HasIndex(e => e.Email, "UQ__Users__A9D1053430B49968").IsUnique();

            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FullName).HasMaxLength(100);
            entity.Property(e => e.Image)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.PasswordHash).HasMaxLength(255);
            entity.Property(e => e.PhoneNumber).HasMaxLength(15);
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .HasDefaultValue("User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
