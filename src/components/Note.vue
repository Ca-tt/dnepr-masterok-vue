<template>
   <section class="note">
       <section class="union">
            <div class="note-title">
                <h5 class="title-note">ПРИМЕЧАНИЕ</h5>
            </div>
            <div class="only-documents">
                <p class="notes">Все работы по аварийному вскрытию замков осуществляются ТОЛЬКО при наличии документов на вскрываемый объект!</p>
            </div>
       </section>
   </section>
</template>

<style>
    @media screen and (max-width: 1024px){
        .notes{
            font-size: 15px !important;
        }
        .title-note{
            font-size: 20px !important;
        }
    }
    .notes{
        font-size: 18px;
        margin: 5px;
    }
    .title-note{
        font-size: 23px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    .union{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .note{
        background-color: rgb(245, 250, 253);
        height: 200px;
        padding: 2.5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script>

export default {
  name: 'Note',

}
</script>