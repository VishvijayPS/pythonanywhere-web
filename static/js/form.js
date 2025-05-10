document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // UI Feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        try {
            // Collect form data
            const formData = new FormData(form);
            const services = Array.from(
                document.querySelectorAll('input[name="services"]:checked')
            ).map(el => el.value);
            
            const payload = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone') || '',
                message: formData.get('message') || '',
                services: services
            };
            
            console.log('Submitting:', payload);

            // Send to Flask
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            console.log('Response status:', response.status);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Success:', result);
            
            // Success UI
            submitBtn.textContent = '✓ Submitted!';
            form.reset();
            
            setTimeout(() => {
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;
            }, 2000);
            
        } catch (error) {
            console.error('Submission failed:', error);
            
            // Error UI
            submitBtn.textContent = 'Try Again';
            submitBtn.disabled = false;
            
            alert(`Submission failed: ${error.message}`);
        }
    });
    
    // Real-time validation
    document.getElementById('email').addEventListener('input', (e) => {
        e.target.setCustomValidity(
            e.target.validity.typeMismatch ? 'Please enter a valid email' : ''
        );
    });
});