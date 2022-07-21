import "./styles.css"

const Contact = () => {
    return (
        <div id="container">
            <h1>Contect Us</h1>
            <div class="underline">
            </div>
            <form action="#" method="post" id="contact_form">
                <div class="name">
                    <label for="name"></label>
                    <input type="text" placeholder="My name is" name="name" id="name_input" required />
                </div>
                <div class="email">
                    <label for="email"></label>
                    <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
                </div>
                <div class="telephone">
                    <label for="name"></label>
                    <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required />
                </div>
                <div class="subject">
                    <label for="subject"></label>
                    <select placeholder="Subject line" name="subject" id="subject_input" required>
                        <option disabled hidden selected>Subject line</option>
                        <option>I'd like to start a project</option>
                        <option>I'd like to ask a question</option>
                        <option>I'd like to make a proposal</option>
                    </select>
                </div>
                <div class="message">
                    <label for="message"></label>
                    <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="Send Message" id="form_button" />
                </div>
            </form>
        </div>
    )
}

export default Contact;