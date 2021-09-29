<template>
    <div class="contact-form">
        <h3 class="contact-title">{{ lang != 'english' ? 'Contact:' : 'Contacto:' }}</h3>
        <form @submit="createComment" method="post" autocomplete="on">
        <input v-model="userName" class="input-box" type="text" id="username" name="username" :placeholder="lang != 'english' ? 'Your name' : 'Su nombre'" required><br>
        <input v-model="email" class="input-box" type="email" name="email" id="email" :placeholder="lang != 'english'? 'Your email' : 'Su correo electrónico'" required><br>
        <input v-model="verifyEmail" class="input-box" type="email" name="emailverify" id="email-verify" :placeholder="lang != 'english' ? 'Verify your email' : 'Verifique su correo'" required><br>
        
        <template v-if="email !=verifyEmail">
            <span class="span-alert">{{ lang !='english' ? 'Email fields don\'t match against each other. Please verify your email.' : 'La dirección de correo no coincide. Por favor, verifique su correo.'}}</span><br>
        </template>

        <textarea v-model="comment" class="comment-box" name="comment" id="comment" :placeholder="lang != 'english' ? 'Leave your message here...' : 'Deje su mensaje acá...'"></textarea><br>
        <input class="btn" type="submit" :value="lang != 'english' ? 'Submit' : 'Enviar'"><br>
    </form>
    </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { mapState } from 'vuex'
export default {
    name: 'ContactForm',
    data(){
        return {
            userName: '',
            email: '',
            verifyEmail: '',
            comment: '',
        }
    },
    methods: {
        createComment(e){
            e.preventDefault()
            //verify if email inputs match against each other:
            if (this.email != this.verifyEmail) {
                alert(this.lang != 'english' ? 'Please verify your email.' : 'Por favor, verifique su correo.')
            } else {
                //create Firestore document with form data:
                const app = initializeApp(this.firebaseConfig)
                const db = getFirestore(app)
                try {
                    setDoc(doc(db, 'comments', `${Date.now()}${this.email.substring(0, 4)}`), {
                    name: this.userName,
                    email: this.email,
                    text: this.comment
                })
                //clear form:
                this.userName = '',
                this.email = '',
                this.verifyEmail = '',
                this.comment = ''
                } catch (err) {
                    alert(this.lang != 'english' ? 'Something went wrong. Please try to submit your message again.' : 'Algo salió mal. Por favor, intente enviar su mensaje nuevamente.')
                }    
            }
        }
    },
    computed: {
        ...mapState({
            firebaseConfig: 'firebaseConfig',
            lang: 'language'
        })
    }
}
</script>

<style scoped>
.contact-form {
    margin-top: 50px;
}

.contact-title {
    margin-right: 540px;
    font-size: 1.7rem;
    color: snow;
    margin-bottom: 10px;
}

.input-box {
    width: 620px;
    height: 2.5rem;
    margin: 20px 0px;
    border: 2px solid snow;
    border-radius: 8px;
    color: snow;
    font-size: 1.3rem;
    margin-left: 20px;
    padding: 5px;
    padding-left: 40px;
}

.span-alert {
    color: snow;
    font-weight: 400;
    font-size: 1rem;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid firebrick;
}

.comment-box {
    width: 620px;
    height: 150px;
    margin: 20px 0px;
    border: 2px solid snow;
    border-radius: 8px;
    color: snow;
    font-size: 1.3rem;
    margin-left: 20px;
    padding: 15px;
    padding-left: 40px;
}

.btn {
    position: relative;
    left: 300px;
    width: 6rem;
    height: 2.5rem;
    color: snow;
    font-size: 1rem;
    border: 2px solid snow;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
}

.btn:hover {
    width: 6.5rem;
    height: 3rem;
    border: 2.4px solid blue;
    font-size: 1.2rem;
}

@media (max-width: 480px){
    .contact-form {
        position: relative;
        left: 40px;
    }

    .contact-title {
        font-size: 1rem;
    }

    .input-box {
        position: relative;
        right: 40px;
        width: 280px;
        height: 1.5rem;
        margin: 5px 0px;
        font-size: 1rem;
        padding-left: 20px;
    }

    .comment-box {
        position: relative;
        right: 50px;
        top: -10px;
        width: 275px;
        height: 100px;
        font-size: 1rem;
        padding-left: 20px;
    }

    .btn {
        position: relative;
        left: 78px;
        top: -20px;
        font-size: .8rem;
        width: 4.8rem;
        height: 1.7rem;
    }

    .btn:hover {
        width: 5rem;
        height: 2rem;
        font-size: 1rem;
        border: 2 solid blue;
    }

}

</style>