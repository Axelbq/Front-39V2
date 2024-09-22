<template>
  <div>
    <h2>Contact us to choose your character</h2>
    <div class="forms-container">
      <CharactersForm :formData="form1Data" @update:formData="form1Data = $event" />
      <CharactersForm :formData="form2Data" @update:formData="form2Data = $event" />
    </div>
  </div>
</template>

<script>
import CharactersForm from './CharactersForm.vue';

export default {
  components: {
    CharactersForm
  },
  data() {
    return {
      form1Data: {
        name: '',
        age: '',
        height: '',
        gender: '',
        isMaster: false,
        race: 'human',
        class: 'warrior',
        talents: {
          magic: false,
          sword: false
        },
        hairColor: '#000000',
        bio: ''
      },
      form2Data: {
        name: '',
        age: '',
        height: '',
        gender: '',
        isMaster: false,
        race: 'human',
        class: 'warrior',
        talents: {
          magic: false,
          sword: false
        },
        hairColor: '#000000',
        bio: ''
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.forms-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
