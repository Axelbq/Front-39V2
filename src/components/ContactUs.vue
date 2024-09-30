<template>
  <div>
    <character-form :initialData="form1Data" @sync="updateForm2" @updateFormData="checkSync" />
    <character-form :initialData="form2Data" @sync="updateForm1" @updateFormData="checkSync" />
  </div>
</template>

<script>
import CharacterForm from './CharacterForm.vue';

export default {
  components: { CharacterForm },
  data() {
    return {
      form1Data: {
        name: '',
        age: '',
        height: '',
        gender: '',
        isMaster: false,
        race: '',
        class: '',
        hairColor: '#000000',
        bio: ''
      },
      form2Data: {
        name: '',
        age: '',
        height: '',
        gender: '',
        isMaster: false,
        race: '',
        class: '',
        hairColor: '#000000',
        bio: ''
      }
    };
  },
  methods: {
    updateForm1(data) {
      this.form1Data = { ...data };
    },
    updateForm2(data) {
      this.form2Data = { ...data };
    },
    checkSync() {
      // Дополнительная логика для проверки синхронизации
    }
  }
};
</script>
