export const authHTML = () => (
    `<div class="auth-page">
        <div class="auth-container container mx-auto px-4">
            <div class="auth-heading text-center mt-4">
                <h1 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Sign In to send and receive rewards
                </h1>
            </div>
            <div class="auth-form-container">
                <button 
                    id="sign-in-button"
                    class="sign-in-button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    style="transition: all 0.15s ease 0s;"
                    >
                    Sign In
                </button>
            </div>
        </div>
    </div>`
)