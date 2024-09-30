<template>
    <div>
      <label>{{ label }}</label>
      <input v-if="type === 'text' || type === 'number' || type === 'color' || type === 'date'"
             :type="type"
             :value="value"
             @input="$emit('input', $event.target.value)" />
      
      <textarea v-if="type === 'textarea'"
                :value="value"
                @input="$emit('input', $event.target.value)"></textarea>
  
      <input v-if="type === 'checkbox'"
             type="checkbox"
             :checked="value"
             @change="$emit('input', $event.target.checked)" />
  
      <input v-if="type === 'radio'"
             type="radio"
             :value="radioValue"
             :checked="value === radioValue"
             @change="$emit('input', radioValue)" />
  
      <select v-if="type === 'select'"
              :value="value"
              @change="$emit('input', $event.target.value)">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: [String, Number, Boolean],
      type: {
        type: String,
        required: true
      },
      label: String,
      radioValue: String,
      options: Array
    }
  };
  </script>
  