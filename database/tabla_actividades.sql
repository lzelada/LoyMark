USE [LoyMark]
GO

/****** Object:  Table [dbo].[Actividades]    Script Date: 15/6/2023 20:58:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Actividades](
	[id_actividad] [int] IDENTITY(1,1) NOT NULL,
	[create_date] [date] NULL,
	[id_usuario] [int] NULL,
	[actividad] [nvarchar](50) NULL,
 CONSTRAINT [PK_Actividades] PRIMARY KEY CLUSTERED 
(
	[id_actividad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

