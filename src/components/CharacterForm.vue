<template>
  <div>
    <h3>Форма персонажа</h3>
    <form-field label="Имя" type="text" :value="formData.name" @input="updateField('name', $event)" />
    <form-field label="Возраст" type="date" :value="formData.age" @input="updateField('age', $event)" />
    <form-field label="Рост" type="number" :value="formData.height" @input="updateField('height', $event)" />
    <form-field label="Пол (Мужской)" type="radio" :value="formData.gender" radioValue="Мужской" @input="updateField('gender', $event)" />
    <form-field label="Пол (Женский)" type="radio" :value="formData.gender" radioValue="Женский" @input="updateField('gender', $event)" />
    <form-field label="Персонаж мастера?" type="checkbox" :value="formData.isMaster" @input="updateField('isMaster', $event)" />
    <form-field label="Раса" type="select" :value="formData.race" :options="['Человек', 'Эльф', 'Орк']" @input="updateField('race', $event)" />
    <form-field label="Класс" type="select" :value="formData.class" :options="['Воин', 'Маг', 'Лучник']" @input="updateField('class', $event)" />
    <form-field label="Цвет волос" type="color" :value="formData.hairColor" @input="updateField('hairColor', $event)" />
    <form-field label="Биография" type="textarea" :value="formData.bio" @input="updateField('bio', $event)" />

    <button @click="syncForm" :disabled="isSynced">Синхронизировать</button>
  </div>
</template>

<script>
import FormField from './FormField.vue';

export default {
  components: { FormField },
  props: ['initialData'],
  data() {
    return {
      formData: { ...this.initialData }
    };
  },
  computed: {
    isSynced() {
      return JSON.stringify(this.formData) === JSON.stringify(this.initialData);
    }
  },
  methods: {
    updateField(field, value) {
      this.formData[field] = value;
      this.$emit('updateFormData', this.formData);
    },
    syncForm() {
      this.$emit('sync', this.formData);
    }
  },
  watch: {
    initialData(newData) {
      this.formData = { ...newData };
    }
  }
};
</script>
