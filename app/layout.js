import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Anderson Britto | Personal Trainer Elite',
  description: 'Anderson Britto - Personal Trainer especializado em treinos personalizados para transformar seu corpo e mente',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}