# App Flow Document

## Onboarding and Sign-In/Sign-Up

When a new visitor arrives at the application, they land on the public-facing homepage located at the root URL. This page serves as the landing page with marketing sections that explain the product value and invite the visitor to either sign up or sign in. In the header and within the hero section, there are prominent call-to-action buttons labeled “Sign Up” and “Log In.” Clicking on “Sign Up” takes the visitor to the dedicated registration page, while clicking on “Log In” takes them to the authentication page for existing accounts.

On the registration page, the user sees a simple form that asks for an email address, a password, and a confirmation of the password. The user fills out these fields and submits the form. The form submission triggers a call to the `/api/auth/signup` route, which uses the authentication library to validate the input, create a new user record in the PostgreSQL database via the Drizzle ORM, and then establish a session. If registration succeeds, the user is automatically redirected to the protected dashboard area.

On the sign-in page, the returning user enters their email and password and submits the form. The form calls the `/api/auth/signin` endpoint, which validates the credentials against stored records. A successful login creates a session cookie and redirects the user to the dashboard. Both the sign-up and sign-in pages offer a link labeled “Forgot Password?” which navigates to the password recovery page. On that page, the user enters their registered email and submits it. The application sends a password reset link to their email. Clicking the link in the email brings the user to a password reset form where they choose a new password, submit it, and are redirected to the sign-in page.

Once signed in, the user can log out by clicking the “Sign Out” button available in the header of every protected page. This action calls the `/api/auth/signout` route, which clears the session, and the user is redirected back to the landing page.

## Main Dashboard or Home Page

After authentication, the user arrives at the main dashboard at `/dashboard`. The dashboard page displays a top navigation bar that includes the application logo on the left, a theme toggle switch on the right for switching between light and dark modes, and a profile avatar that opens a dropdown menu with links to “Settings” and “Sign Out.” Immediately below the navigation bar, a sidebar sits on the left side of the screen, showing links to “Dashboard Home,” “Profile Settings,” and “Billing & Subscription.” The rest of the screen is the main content area where the primary application features will appear.

The default view of the dashboard home page greets the user by name and presents a placeholder panel for core application components or widgets. From this dashboard home, the user can click on any sidebar link or navigation dropdown item to move to other sections of the application, such as settings or billing.

## Detailed Feature Flows and Page Transitions

The landing page at the root URL is composed of five marketing sections arranged vertically: the hero section with headline text and call-to-action buttons, a features section that highlights key capabilities, a testimonials section that showcases user quotes in styled cards, a pricing section that displays plan tiers using card components, and an FAQ section built with an accordion component. As the user scrolls down, each section smoothly animates into view. The call-to-action buttons in the hero and pricing sections link to the authentication pages.

When the user clicks “Sign Up” on the landing page, they navigate to `/sign-up`. After successful registration, the route automatically redirects to `/dashboard`. If the user instead clicks “Log In,” they go to `/sign-in` and, upon successful authentication, are redirected in the same way to `/dashboard`.

Inside the protected dashboard area, clicking on “Profile Settings” in the sidebar takes the user to `/dashboard/settings/profile`. This page displays a form pre-populated with the user’s name, email, and other personal details stored in the database. The user can update any field and submit the form. Submitting calls `/api/user/update-profile`, which updates the record in the database and returns a success or error message. A success message appears at the top of the form to confirm the changes.

Clicking on “Billing & Subscription” in the sidebar brings the user to `/dashboard/settings/billing`. On this page, the user can view their current subscription plan, next billing date, and payment method. They can upgrade or downgrade their plan by selecting a new tier from a list of options. When the user selects a new plan and confirms, a call goes to `/api/billing/update-subscription`, which interacts with the payment provider to process the change. Upon success, the page refreshes with updated subscription details.

Throughout the application, the theme toggle switch calls a client-side function from `next-themes` to switch between light and dark modes instantly. The user’s theme preference is stored in local storage so the chosen theme persists across page reloads and sessions.

## Settings and Account Management

The settings area is accessible from the dashboard sidebar under “Profile Settings” and “Billing & Subscription.” In the profile section, users manage personal information such as their display name, email address, and password. Changing the password requires entering the current password for security. After submitting, the form calls the API to update the account and then displays confirmation.

The billing section allows the user to view and modify their subscription plan. They see their active plan, payment history, and billing date. If the application integrates with a payment processor, updating payment information or plans invokes secure API endpoints that handle the transaction and return updated billing details.

After making any changes in the settings area, the user can return to the main dashboard by clicking the “Dashboard Home” link in the sidebar or selecting “Dashboard” from the profile dropdown in the top bar. This ensures a smooth transition back to the core application view.

## Error States and Alternate Paths

If the user enters invalid credentials during sign-up or sign-in, the form displays an inline error message indicating the problem, such as “Email already in use” or “Incorrect password.” On the password recovery page, if the email address is not recognized, the page shows an error prompt explaining that no account was found.

If a network interruption occurs while submitting any form, a banner appears at the top of the page stating that the network connection was lost and prompting the user to retry. For critical API errors, a fallback error page renders with a friendly message and a button to return to the last safe page.

When a non-authenticated user attempts to access any route under `/dashboard`, the application automatically redirects them to the sign-in page. If the user’s session expires while they are active in the dashboard, they are redirected to sign in again and prompted with a message explaining that their session has ended.

## Conclusion and Overall App Journey

The typical user begins by visiting the landing page, learning about the product, and choosing to sign up or sign in through prominent CTAs. After creating an account or logging in, they gain access to the protected dashboard. From there, they see a personalized welcome, navigate to settings to manage their profile or billing, and use the main dashboard features. At any time, they can switch between light and dark themes or sign out to end the session. Throughout the process, clear error messages and redirects guide the user back onto the correct path, ensuring a seamless experience from discovery through everyday usage.