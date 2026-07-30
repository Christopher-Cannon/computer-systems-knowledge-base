<script setup>
import MainHeading from '../components/common/MainHeading.vue';
import MinorHeading from '../components/common/MinorHeading.vue';


</script>

<template>
    <section class="section wrapper">
        <MainHeading>Memory</MainHeading>

        <p>
            Memory is vital for a system to function. For any computation to happen at all, the data and instructions involved must be stored somewhere.
        </p>

        <p>
            It comes in a variety of forms to meet the needs of the system.
        </p>

        <MinorHeading>Read-Only Memory</MinorHeading>

        <p>
            ROM is non-volatile memory that retains data when power is off and usually stores firmware or system instructions needed at boot.
        </p>

        <p>
            It is generally used in electronics where the firmware never changes and comes in several forms.
        </p>

        <h4 class="h3">Programmable ROM</h4>

        <p>
            Starts blank and can only be programmed once after manufacture since the writing process is destructive.
        </p>

        <p>
            One PROM chip can be configured in many ways as opposed to classic ROM that is programmed at the factory.
        </p>

        <h4 class="h3">Erasable PROM</h4>

        <p>
            Can be erased using ultraviolet light and reprogrammed many times using special tools.
        </p>

        <p>
            Their increased versatility meant they saw use as BIOS chips in early PCs.
        </p>


        <h4 class="h3">Electrically Erasable ROM</h4>

        <p>
            Can be erased without the need for UV light. Despite being slower than main memory (RAM), it eventually took the place of EPROM due to it being more convenient.
        </p>

        <p>
            Often used for BIOS settings, microcontroller firmware and smart cards. Flash memory, used in USB flash drives, SD cards and SSDs, are also a type of EEPROM.
        </p>
    </section>
</template>

<style scoped>
    
</style>