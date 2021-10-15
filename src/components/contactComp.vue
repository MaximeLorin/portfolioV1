<template>
  <div class="contact">
    <div class="mailSent" v-if="mailSent">
      <p>Message envoyé !</p>
      <p class="mailSent__return" @click="mailSent = false">
        Renvoyer un message
      </p>
    </div>
    <form @submit.prevent="submit" @reset="onReset">
      <div class="toFill">
        <label>Votre nom:</label>
        <input class="nameEmail" v-model="name" />
      </div>

      <div class="toFill">
        <label>Votre email:</label>
        <input class="nameEmail" v-model="email" />
      </div>

      <div class="toFill">
        <label>Le sujet de votre message:</label>
        <select class="subject" v-model="subject" id="options" name="options">
          <option class="options" value="J'ai besoin d'informations"
            >J'ai besoin d'informations...</option
          >
          <option value="Je souhaites travailler avec vous"
            >Je souhaites travailler avec vous...</option
          >
          <option value="Autre">Autre...</option>
        </select>
      </div>

      <div class="toFill">
        <label>Quel est votre message ?</label>
        <textarea class="messageBox" v-model="message"></textarea>
      </div>

      <button type="submit">Envoyer</button>
      <!-- <button type="reset">Recommencer</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
    };
  },
  computed: {
    formValid() {
      const { name, email, subject, message } = this;
      return (
        name.length > 0 &&
        name.length < 35 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
        subject.length > 0 &&
        message.length > 0 &&
        message.length < 3000
      );
    },
  },
  methods: {
    onReset() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
    async submit() {
      try {
        if (!this.formValid) {
          return;
        }
        const toSent = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };

        axios.post("https://maximelorin.com/mailapp/send", toSent, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Mail envoyé");
        this.onReset();
        this.mailSent = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./public/variables.scss";

.contact {
  height: 73vh;
  background-color: $secondairy-color;
  color: $primary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mailSent {
  position: absolute;
  height: 73vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: $regular-font;
  background-color: $secondairy-color;
  &__return {
    text-decoration: underline;
    cursor: pointer;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
label {
  font-size: 1.1rem;
  margin-bottom: 5px;
}
textarea {
  resize: none;
}
.toFill {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.nameEmail {
  margin-bottom: 1vh;
  width: 160px;
  height: 25px;
  padding-left: 15px;
  border-radius: 15px;
  border: 1px solid $line-color;
  color: $primary-color;
  &:focus {
    outline: none;
    background-color: lighten($color: $tertiary-color, $amount: 15);
    transition: all 0.25s ease-in-out;
  }
}
.subject {
  margin-bottom: 1vh;
  width: 260px;
  height: 25px;
  padding-left: 15px;
  border-radius: 15px;
  border: 1px solid $line-color;
  color: $primary-color;
  &:focus {
    outline: none;

    background-color: lighten($color: $tertiary-color, $amount: 15);
    transition: all 0.25s ease-in-out;
  }
}
.messageBox {
  padding-top: 10px;
  margin-bottom: 2vh;
  width: 100%;
  height: 180px;
  max-width: 100%;
  padding-right: 10px;
  padding-left: 15px;
  color: $primary-color;

  border: 1px solid $line-color;
  border-radius: 15px;
  font-size: 1.1rem;
  &:focus {
    outline: none;

    background-color: lighten($color: $tertiary-color, $amount: 15);
    transition: all 0.25s ease-in-out;
  }
}
button {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2vh;
  border: 2px solid $primary-color;
  border-radius: 20px;
  color: $primary-color;
  height: 35px;
  width: 120px;
  cursor: pointer;
  &:hover {
    color: $secondairy-color;
    background-color: $primary-color;
    transition: all 0.2s ease-in-out;
  }
}
.options {
  color: $primary-color;
}
@include screen-mobileV {
  .contact {
    height: 143vh;
  }
}
</style>
