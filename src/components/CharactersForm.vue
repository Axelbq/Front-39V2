<template>
  <div>
    <div>
      <label>Имя:</label>
      <input type="text" v-model="localFormData.name" />
    </div>

    <div>
      <label>Возраст:</label>
      <input type="date" v-model="localFormData.age" />
    </div>

    <div>
      <label>Рост:</label>
      <input type="number" v-model="localFormData.height" />
    </div>

    <div>
      <label>Пол:</label>
      <label><input type="radio" value="male" v-model="localFormData.gender" /> Мужчина</label>
      <label><input type="radio" value="female" v-model="localFormData.gender" /> Женщина</label>
    </div>

    <div>
      <label>Кто ты воин?</label>
      <input type="checkbox" v-model="localFormData.isMaster" />
    </div>

    <div>
      <label>Раса:</label>
      <select v-model="localFormData.race">
        <option value="human">Человек</option>
        <option value="elf">Эльф</option>
        <option value="dwarf">Дварф</option>
      </select>
    </div>

    <div>
      <label>Класс:</label>
      <select v-model="localFormData.class">
        <option value="warrior">Воин</option>
        <option value="mage">Маг</option>
        <option value="archer">Лучник</option>
      </select>
    </div>

    <div>
      <label>Таланты:</label>
      <label><input type="checkbox" v-model="localFormData.talents.magic" /> Магия</label>
      <label><input type="checkbox" v-model="localFormData.talents.sword" /> Меч</label>
    </div>

    <div>
      <label>Цвет волос:</label>
      <input type="color" v-model="localFormData.hairColor" />
    </div>

    <div>
      <label>Биография:</label>
      <textarea v-model="localFormData.bio"></textarea>
    </div>

    <!-- Кнопка для ручной синхронизации данных -->
    <button @click="syncData">Синхронизировать данные</button>
  </div>
</template>
  
<script>
export default {
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localFormData: { ...this.formData } // Создаем копию пропса для локального использования
    };
  },
  methods: {
    syncData() {
      this.$emit('update:formData', this.localFormData); // Отправляем изменения при нажатии на кнопку
    }
  }
};
</script>
