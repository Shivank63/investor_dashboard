# 📊 PAMM/MAMM Investor Dashboard

A modern, responsive investor dashboard built with React.js and Next.js that simulates a Professional Asset Management & Multi-Manager (PAMM/MAMM) system for forex trading platforms.

![Dashboard Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.x-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC)

## 🚀 Features

### 📈 **Dashboard Overview**
- **Real-time Metrics**: Total invested capital, net profit/loss, active investors, and average allocation
- **Interactive Summary Cards**: Beautiful gradient cards with hover animations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 👥 **Investor Management**
- **Advanced Table**: Sortable columns with search and filter functionality
- **Status Tracking**: Active/inactive investor status with color-coded badges
- **Progress Visualization**: Allocation percentages with progress bars
- **Action Menus**: View details and export individual reports

### 📊 **Data Visualization**
- **Pie Charts**: Investment allocation distribution across investors
- **Bar Charts**: Capital distribution visualization
- **Line Charts**: Performance trends over time with profit/loss tracking
- **Interactive Tooltips**: Detailed information on hover

### 🎨 **Modern UI/UX**
- **Gradient Backgrounds**: Professional color schemes
- **Smooth Animations**: Hover effects and transitions
- **Clean Typography**: Readable fonts and proper spacing
- **Accessibility**: ARIA labels and keyboard navigation support

### 📤 **Export Functionality**
- **PDF Export**: Generate comprehensive reports
- **Excel Export**: Data export for further analysis
- **Individual Reports**: Per-investor detailed reports

## 🛠️ Tech Stack

- **Frontend**: React.js 18.x, Next.js 14.x
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts library
- **Icons**: Lucide React
- **Language**: TypeScript/JavaScript
- **State Management**: React Hooks (useState, useContext)

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Quick Start

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/investor-dashboard.git
cd investor-dashboard

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

# Open browser and navigate to
http://localhost:3000
\`\`\`

### Production Build

\`\`\`bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
\`\`\`

## 🏗️ Project Structure

\`\`\`
investor-dashboard/

├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   ├── select.tsx
│   │   └── dropdown-menu.tsx
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── SummaryCards.jsx
│   │   ├── InvestorTable.jsx
│   │   └── Charts.jsx
│   └── layout/                   # Layout components
│       └── Header.jsx
├── data/
│   └── mockData.js               # Sample data
├── utils/
│   └── helpers.js                # Utility functions
├── public/                       # Static assets
├── tailwind.config.js            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
└── README.md                     # Project documentation
\`\`\`

## 🎯 Key Components

### Summary Cards
- **Total Invested Capital**: Displays total investment with growth indicators
- **Net Profit/Loss**: Shows overall performance with ROI calculations
- **Active Investors**: Count of active vs inactive investors
- **Average Allocation**: Portfolio distribution metrics

### Investor Table
- **Search & Filter**: Real-time search and status filtering
- **Sorting**: Click column headers to sort data
- **Progress Bars**: Visual representation of allocation percentages
- **Action Menus**: Dropdown menus for additional actions

### Charts & Analytics
- **Allocation Pie Chart**: Visual breakdown of investment distribution
- **Performance Line Chart**: Profit/loss trends over time
- **Investment Bar Chart**: Capital distribution by investor

## 🔧 Configuration

### Environment Variables
Create a \`.env.local\` file in the root directory:

\`\`\`env
# API Configuration (when connecting to real backend)
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_API_KEY=your_api_key_here

# Database Configuration (if using)
DATABASE_URL=your_database_url_here
\`\`\`

### Tailwind CSS Customization
Modify \`tailwind.config.js\` to customize colors, fonts, and spacing:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
\`\`\`

## 📊 Data Structure

### Investor Data Model
\`\`\`javascript
{
  id: number,
  name: string,
  invested: number,
  allocation: number,
  profitLoss: number,
  status: 'active' | 'inactive',
  joinDate: string,
  email: string
}
\`\`\`

### Performance Data Model
\`\`\`javascript
{
  month: string,
  profit: number,
  loss: number,
  net: number
}
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the prompts to configure your deployment
\`\`\`

### Netlify
\`\`\`bash
# Build the project
npm run build

# Deploy the 'out' folder to Netlify
\`\`\`

### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## 🔮 Future Enhancements

### Planned Features
- [ ] **Real-time Data**: WebSocket integration for live updates
- [ ] **User Authentication**: Login system with role-based access
- [ ] **Advanced Filtering**: Date ranges, performance filters
- [ ] **Mobile App**: React Native version
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Notifications**: Alert system for important events
- [ ] **API Integration**: Connect to real trading platforms
- [ ] **Advanced Charts**: More visualization options
- [ ] **Multi-language**: Internationalization support
- [ ] **Performance Optimization**: Code splitting and lazy loading

### Technical Improvements
- [ ] **Unit Tests**: Jest and React Testing Library
- [ ] **E2E Tests**: Cypress or Playwright
- [ ] **Storybook**: Component documentation
- [ ] **PWA**: Progressive Web App features
- [ ] **SEO**: Meta tags and structured data

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: \`git checkout -b feature/amazing-feature\`
3. **Commit your changes**: \`git commit -m 'Add amazing feature'\`
4. **Push to the branch**: \`git push origin feature/amazing-feature\`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly
- Ensure responsive design works on all devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the charting library
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/Shivank63/investor-dashboard/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainer directly

## 🔄 Changelog

### Version 1.0.0 (Current)
- ✅ Initial release with core dashboard functionality
- ✅ Responsive design implementation
- ✅ Interactive charts and tables
- ✅ Export functionality (mock)
- ✅ Modern UI with animations

### Version 0.9.0 (Beta)
- ✅ Component architecture setup
- ✅ Basic dashboard layout
- ✅ Mock data integration

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and ☕ by Shivank Verma
