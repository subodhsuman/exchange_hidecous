<template>
<div class="base-image-input" :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
    <span v-if="!imageData" class="placeholder">
        Choose an Image
    </span>
    <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
</div>
</template>

<script>
export default {
    name: 'BaseInput',

    data() {
        return {
            imageData: null
        }
    },
    props: ['modelvalue'],

    methods: {
        chooseImage() {
            this.$refs.fileInput.click()
        },

        onSelectFile() {

            const inputt = this.$refs.fileInput
            const files = inputt.files
            if (files && files[0]) {
                const reader = new FileReader
                reader.onload = e => {
                    this.imageData = e.target.result
                }
                reader.readAsDataURL(files[0])
                this.$emit("update:modelValue", files[0])

            }
        }
    }
}
</script>

<style scoped>
.base-image-input {
    display: block;
    width: 80px;
    height: 80px;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
}

.placeholder {
    background: var(--hideous-white);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--hideous-black);
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
}



.file-input {
    display: none;
}
</style>
