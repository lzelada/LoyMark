using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace back_end.EF;

public partial class LoyMarkContext : DbContext
{
    public LoyMarkContext()
    {
    }

    public LoyMarkContext(DbContextOptions<LoyMarkContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Actividade> Actividades { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=;Database=LoyMark;Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Actividade>(entity =>
        {
            entity.HasKey(e => e.IdActividad);

            entity.Property(e => e.IdActividad).HasColumnName("id_actividad");
            entity.Property(e => e.Actividad)
                .HasMaxLength(50)
                .HasColumnName("actividad");
            entity.Property(e => e.CreateDate)
                .HasColumnType("date")
                .HasColumnName("create_date");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.ToTable("Usuario");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .HasColumnName("apellido");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("fecha_nacimiento");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
            entity.Property(e => e.Pais)
                .HasMaxLength(50)
                .HasColumnName("pais");
            entity.Property(e => e.Pregunta).HasColumnName("pregunta");
            entity.Property(e => e.Telefono).HasColumnName("telefono");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
