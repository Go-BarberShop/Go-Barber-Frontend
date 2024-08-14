// import { render, screen } from '@testing-library/react';
// import Home from '../app/page';

// describe('Home Component', () => {
//   it('renders the correct starting text', () => {
//     render(<Home />);
//     expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
//   });



//   it('renders the Next.js logo', () => {
//     render(<Home />);
//     const nextLogo = screen.getByAltText('Next.js Logo');
//     expect(nextLogo).toBeInTheDocument();
//   });

//     it('renders four cards with correct text', () => {
//       render(<Home />);
      
//       // Get the cards by their roles and specific text inside them
//       const docsCard = screen.getByRole('link', { name: /Docs/i });
//       const learnCard = screen.getByRole('link', { name: /Learn/i });
//       const templatesCard = screen.getByRole('link', { name: /Templates/i });
//       const deployCard = screen.getByRole('link', { name: /Deploy/i });
  
//       // Check that they are in the document
//       expect(docsCard).toBeInTheDocument();
//       expect(learnCard).toBeInTheDocument();
//       expect(templatesCard).toBeInTheDocument();
//       expect(deployCard).toBeInTheDocument();
//     });
// });
