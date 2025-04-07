import {render,waitFor,screen} from '@testing-library/react'
import JobCard from './JobCard.jsx';

describe('JobCard', () => {
    it("shoulde fetch and display the job card data", async () => {
        render(<JobCard/>)
        const addressElement = screen.getByText(/address/i)
        const emailElement = screen.getByText(/email/i)
        const phoneElement = screen.getByText(/phone/i)
        const nameElement = screen.getByText(/name/i)
        await waitFor(() => {
            expect(addressElement).toBeInTheDocument()
            expect(emailElement).toBeInTheDocument()
            expect(phoneElement).toBeInTheDocument()
            expect(nameElement).toBeInTheDocument()
        })
    })
})