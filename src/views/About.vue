<template>
    <div class="about block" v-if="refresh" data-scroll-container>
        <section data-scroll-section class="md:mt-28 md:mx-10 px-2 pt-20 md:pt-0 md:min-h-screen">
            <h2 class="md:text-8xl text-3xl leading-none md:-mt-3 uppercase overflow-hidden"><span class="sp transform translate-y-full inline-block">kami adalah</span></h2>
            <h2 class="md:text-8xl text-3xl leading-none md:-mt-3 uppercase overflow-hidden"><span class="sp transform translate-y-full inline-block">alang institute, </span></h2>
            <h2 class="md:text-8xl text-3xl leading-none md:-mt-3 uppercase overflow-hidden"><span class="sp transform translate-y-full inline-block">bangun kreativitas dan</span></h2>
            <h2 class="md:text-8xl text-3xl leading-none md:-mt-3 uppercase overflow-hidden"><span class="sp transform translate-y-full inline-block">potensi hebat kamu</span></h2>
            <h2 class="md:text-8xl text-3xl leading-none md:-mt-3 uppercase overflow-hidden"><span class="sp transform translate-y-full inline-block">bersama kami sekarang</span></h2>
        </section>
        <div data-scroll-section class="md:min-h-screen mt-32 md:mt-0">
            <div id="visi" class="anim visimisi px-2 md:mx-10 md:flex justify-end">
                <div class="md:w-4/6">
                    <h6 class="uppercase text-xs md:text-sm font-bold mb-5">Visi & misi</h6>
                    <h5 class="uppercase text-xs md:text-sm">Menjadi media alternatif pengembangan sumber daya manusia 
                        melalui pendidikan, pelatihan dan pengabdian masyarakat untuk mengembangkan segala potensi diri, 
                        dalam membentuk pribadi unggul dan adaptif sesuai dengan kebutuhan zaman
                    </h5>
                    <div class="misi mt-10 grid md:grid-cols-2 md:gap-3 grid-cols-1 gap-2">
                        <p class="uppercase md:text-sm text-xs">Menyusun kurikulum dan perangkat pembelajaran berkelanjutan dan berkompetensi</p>
                        <p class="uppercase md:text-sm text-xs">Mendukung dan memfasilitasi minat dan bakat masyarakat dengan mengadakan kelas, seminar dan talkshow</p>
                        <p class="uppercase md:text-sm text-xs">Mewadahi dan mengembangkan pengetahuan dan keahlian dengan pengajaran dan pelatihan, serta turut memberdayakan masyarakat sekitar dengan pengabdian</p>
                        <p class="uppercase md:text-sm text-xs">Menjalin relasi yang baik dan bekerja sama dengan yayasan, instansi atau bidang kepemerintahan selinear baik dalam daerah maupun di luar daerah</p>       
                    </div>
                </div>
            </div>
        </div>
        <section data-scroll-section class="px-2 md:mx-10 md:min-h-screen md:mb-20 mb-20 mt-28 md:mt-0">
            <div class="flex relative justify-center">
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" class="uppercase md:text-8xl text-3xl">team kami <br>sangat kreative</h2>
                <h4 id="circling" class="absolute hidden md:block text-sm font-thin uppercase md:right-14 top-0">Alang Institute Alang Institute </h4>
            </div>
            <div class="flex justify-end md:mt-32 mt-12">
                <div class="md:w-4/6 w-full ml-auto grid md:gap-10 gap-5 grid-cols-1 md:grid-cols-2">
                    <div v-for="(data,i) in list" v-bind:key="i">
                        <h3 class="font-bold md:text-sm text-xs uppercase">{{data.fullname}}</h3>
                        <p class="text-xs">{{data.detail ? data.detail.department.departemen : ''}}</p>
                        <p class="text-xs mt-2">-{{data.detail ? data.detail.motto : ''}}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-end md:mt-14 md:mr-3 mr-2 mt-10">
                <div class="rounded-full h-12 w-12 flex bg-transparent items-center justify-center border bgs" @click="back" v-show="current_page > 1"><i class='bx bx-arrow-back' ></i></div>
                <div class="ml-4 rounded-full h-12 w-12 flex bg-transparent items-center justify-center border bgs" v-show="list.length > 4" @click="next"><i class='bx bx-right-arrow-alt'></i></div>
            </div>
        </section>
        <section data-scroll-section class="px-2 sm:px-1 md:mx-10 md:min-h-screen">
            <div class="flex justify-center">
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" class="uppercase md:text-8xl text-3xl">kami bergerak bersama <br> setiap waktu </h2>
            </div>
            <div class="md:mt-16 mt-8 flex justify-end">
                <div class="md:w-4/6 w-full">
                    <div class="line w-full"></div>
                    <h6 class="uppercase my-4">work on</h6>
                    <div class="line w-full"></div>
                    <div class="grid md:grid-cols-2 grid-cols-1 md:gap-0">
                        <div class="py-3 md:border-r border-b">
                            <div class="inline-flex">
                                <div class="relative svgs">
                                    <svg width="40" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 284" id="services-01">
                                        <path d="M34.2 38.2L2 70.4c-.9.9-1 1.9-1 2.5 0 .5.1 1.6 1 2.5.7.7 1.5 1 2.5 1 .9 0 1.8-.4 2.5-1l32.1-32.2 32.2 32.1c.9.9 1.9 1 2.5 1 .9 0 1.8-.4 2.5-1 1.4-1.4 1.4-3.6 0-4.9L44 38.2 76.1 5.9c1.4-1.4 1.4-3.6 0-4.9-.9-.9-1.9-1-2.5-1-.5 0-1.6.1-2.5 1l-32 32.2L6.8 1.1C5.9.2 4.9.1 4.3.1c-.5 0-1.6.1-2.5 1C1 2 .9 3 .9 3.6c0 .5.1 1.6 1 2.5l32.3 32.1zM182.9 245.8l32.1-32.2c.9-.9 1-1.9 1-2.5 0-.5-.1-1.6-1-2.5-.9-.9-1.9-1-2.5-1-.5 0-1.6.1-2.5 1l-32 32.3-32.2-32.1c-.9-.9-1.9-1-2.5-1-.5 0-1.6.1-2.5 1-1.4 1.4-1.4 3.6 0 4.9l32.2 32.1-32.1 32.2c-.9.9-1 1.9-1 2.5 0 .5.1 1.6 1 2.5.7.7 1.5 1 2.5 1 .9 0 1.8-.4 2.5-1l32.1-32.2 32.2 32.1c.9.9 1.9 1 2.5 1 .5 0 1.6-.1 2.5-1 1.4-1.4 1.4-3.6 0-4.9l-32.3-32.2zM216 62l-42.3-36.7c-.8-.7-1.7-.9-2.3-.9-.6 0-1.7.2-2.6 1.2-1.3 1.5-1.1 3.7.4 4.9l34.2 29.6-15.4 2C123.4 70.8 85.8 105 65.6 132.2c-15.2 20.5-23.7 40.9-28.1 53.8 2.4.1 4.8.4 7.1.9 4.4-12.6 12.7-32 27.1-51.2C100 98 139.5 75.6 189 69.2l18.2-2.3-32.9 37.9c-.8.9-.9 2-.8 2.5s.2 1.6 1.2 2.4c.8.7 1.7.9 2.3.9.6 0 1.7-.2 2.6-1.2L216.3 67c.8-1 .9-2 .8-2.5 0-.6-.2-1.6-1.1-2.5zM34.4 206.6c-19 0-34.4 15.5-34.4 34.5s15.5 34.4 34.5 34.4h.1c19 0 34.4-15.5 34.4-34.5-.1-18.9-15.6-34.4-34.6-34.4zM7 241.1c0-15.1 12.3-27.5 27.5-27.5 15.1 0 27.4 12.3 27.5 27.4 0 15.1-12.3 27.5-27.4 27.5v3.5-3.5C19.3 268.6 7 256.3 7 241.1zM291.5 28.1c-19 0-34.4 15.5-34.4 34.5S272.6 97 291.6 97h.1c9.2 0 17.8-3.6 24.3-10.1s10.1-15.2 10.1-24.4c-.1-19-15.6-34.4-34.6-34.4zm-27.4 34.5c0-15.1 12.3-27.5 27.5-27.5 15.1 0 27.4 12.3 27.5 27.4 0 7.3-2.8 14.2-8 19.4-5.2 5.2-12.1 8.1-19.4 8.1v3.5V90c-15.3 0-27.6-12.3-27.6-27.4z"/>
                                    </svg>
                                </div>
                                <div class="block ml-6 mt-2">
                                    <h6 class="uppercase">soft skill</h6>
                                    <p class="uppercase text-xs mt-3">pengembangan keahlian dan potensi diri untuk melahirkan banyak kreativitas baru demi terciptanya pribadi yang unggul</p>
                                </div>
                            </div>
                        </div>
                        <div class="py-3 border-b md:pl-4">
                            <div class="inline-flex">
                                <div class="relative svgs">
                                    <svg id="services-02" viewBox="0 0 326 326" width="40" height="60" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.9 146.9h29c.7 0 1.4-.3 2-.8.5-.5.8-1.2.8-2 0-1.5-1.2-2.8-2.8-2.8h-29c-1.5 0-2.8 1.3-2.8 2.8 0 1.5 1.3 2.8 2.8 2.8M256.1 146.5h29c1.5 0 2.8-1.3 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8h-29c-.7 0-1.4.3-2 .8-.5.5-.8 1.2-.8 2 0 1.5 1.2 2.8 2.8 2.8M145.8 33.7c.5-.5.8-1.2.8-2v-29c0-1.5-1.2-2.8-2.8-2.8-.7 0-1.4.3-2 .8-.5.5-.8 1.2-.8 2v29c0 1.5 1.2 2.8 2.8 2.8v3-3c.8.1 1.5-.2 2-.8zM47 197.3c-.5 0-1 .1-1.4.4l-25.1 14.5c-1.3.8-1.8 2.5-1 3.8.5.9 1.4 1.4 2.4 1.4.5 0 1-.1 1.4-.4l25.1-14.5c1.3-.8 1.8-2.5 1-3.8-.5-.9-1.4-1.4-2.4-1.4zM242.4 90.1l25.1-14.5c1.3-.8 1.8-2.5 1-3.8-.5-.9-1.4-1.4-2.4-1.4-.5 0-1 .1-1.4.4l-25.1 14.5c-1.3.8-1.8 2.5-1 3.8.7 1.2 2.5 1.7 3.8 1zM198.5 49.1c1.3.7 3.1.3 3.8-1L216.8 23c.4-.6.5-1.4.3-2.1-.2-.7-.7-1.3-1.3-1.7-.4-.2-.9-.4-1.4-.4-1 0-1.9.5-2.4 1.4l-14.5 25.1c-.4.6-.5 1.4-.3 2.1.2.7.7 1.3 1.3 1.7zM89.2 49.3c1.3-.8 1.8-2.5 1-3.8L75.7 20.4c-.5-.9-1.4-1.4-2.4-1.4-.5 0-1 .1-1.4.4-1.3.8-1.8 2.5-1 3.8l14.5 25.1c.7 1.3 2.5 1.7 3.8 1zM267.7 211.8l-25.1-14.5c-.4-.2-.9-.4-1.4-.4-1 0-1.9.5-2.4 1.4-.4.6-.5 1.4-.3 2.1.2.7.7 1.3 1.3 1.7l25.1 14.5c.4.2.9.4 1.4.4 1 0 1.9-.5 2.4-1.4.8-1.3.3-3-1-3.8zM20.3 75.9l25.1 14.5c1.3.7 3.1.3 3.8-1 .4-.6.5-1.4.3-2.1-.2-.7-.7-1.3-1.3-1.7L23.1 71.1c-.4-.2-.9-.4-1.4-.4-1 0-1.9.5-2.4 1.4-.4.6-.5 1.4-.3 2.1.2.8.7 1.4 1.3 1.7zM234.4 155.5c-1.5-.3-3 .8-3.2 2.3-5.1 29.8-25.8 55.5-53.9 66.9-2.5 1-4.1 3.4-4.1 6.1v22.3H159l-.1-76.3h5.3c6 0 10.9-4.9 10.9-11v-10.4c0-6-4.9-10.9-10.9-10.9h-6.8c-1.5 0-2.8 1.3-2.8 2.8 0 1.5 1.2 2.8 2.8 2.8h6.8c3 0 5.4 2.4 5.4 5.4v10.4c0 3-2.4 5.4-5.4 5.4l-40.5.1c-3 0-5.4-2.4-5.4-5.4v-10.4c0-1.4.6-2.8 1.6-3.8s2.4-1.6 3.8-1.6h6.8c1.5 0 2.8-1.3 2.8-2.8 0-1.5-1.2-2.8-2.8-2.8h-6.8c-2.9 0-5.7 1.1-7.7 3.2-2.1 2.1-3.2 4.8-3.2 7.7v10.4c0 6 4.9 10.9 10.9 10.9h5.3l.1 76.3h-14.2v-22.8c0-2.4-1.5-4.5-3.7-5.4C78 211.7 56.1 180 55.5 144.2c-.9-48.5 37.8-88.9 86.2-90.1h2.3c21.7 0 42.5 7.8 58.6 22 16.2 14.2 26.5 33.9 29.2 55.5.2 1.5 1.6 2.6 3.1 2.4 1.5-.2 2.6-1.6 2.4-3.1-5.8-47-46-82.4-93.4-82.4h-2.4C90.1 49.9 49 92.8 49.9 144.3c.7 37.3 23.3 70.7 57.7 85.1l1.8.8v22.7l-2.6.4c-5.3.8-9.3 5.4-9.3 10.8v10.4c0 6 4.9 10.9 10.9 10.9h4.5l.1 41.6c0 .3.1.8.2 1.1l23.5 54.5c1.5 3.5 4.3 5.6 7.6 5.6 3.2 0 6.1-2.1 7.6-5.6l23.3-54.6c.1-.3.2-.8.2-1.1l-.1-41.6h4.4c2.9 0 5.7-1.1 7.7-3.2 2.1-2.1 3.2-4.8 3.2-7.7V264c0-5.4-4-10-9.3-10.8l-2.6-.4v-22.7l1.8-.8c29.2-12.4 50.7-39.4 56-70.6.1-.7 0-1.5-.5-2.1-.2-.6-.8-1-1.6-1.1zm-80.9 21.2l.1 76.3h-18.8l-.1-76.3h18.8zm-34.9 108.6h22.9l.1 38.8h-22.9l-.1-38.8zM144.4 386l-12.9-29.9h25.7L144.4 386zm15.1-35.5h-30.4l-9-20.9 48.4-.1-9 21zM147.1 324l-.1-38.8h22.9l.1 38.8h-22.9zm32.7-65.5c3 0 5.4 2.4 5.4 5.4v10.4c0 1.4-.6 2.8-1.6 3.8s-2.4 1.6-3.8 1.6l-71.3.1c-3 0-5.4-2.4-5.4-5.4V264c0-3 2.4-5.4 5.4-5.4l71.3-.1z"/>
                                    </svg>
                                </div>
                                <div class="block md:ml-8 ml-6 mt-2">
                                    <h6 class="uppercase">Scholarship</h6>
                                    <p class="uppercase text-xs mt-3">program Scholarship dan bantuan sosial bagi setiap pemuda & pemudi kreatif untuk terciptanya pribadi unggul dan mandiri demi indonesia yang hebat</p>
                                </div>
                            </div>
                        </div>
                        <div class="py-5 md:border-r border-b">
                            <div class="inline-flex">
                                <div class="relative svgs -ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 284" width="50" height="30" id="services-03">
                                        <path d="M306.4 25.5C273.5 9.1 238 .6 200.9.2h-6c-37.1.5-72.6 9.1-105.5 25.6C57 42 28.2 65.7 6 94.3c-7.3 9.4-7.3 22.6.1 32 22.3 28.5 51.2 52.1 83.6 68.2 33 16.4 68.5 24.9 105.5 25.3h6.1c37.1-.5 72.6-9.1 105.5-25.6 32.3-16.2 61.1-39.9 83.3-68.5 7.3-9.4 7.3-22.6-.1-32-22.3-28.5-51.2-52.1-83.6-68.2zM119.8 200.2c-9.3-3.3-18.5-7.1-27.4-11.5C61 173 32.8 150.1 11.1 122.3c-5.5-7.1-5.5-16.9 0-24 21.6-27.8 49.7-50.9 81.1-66.6 8.8-4.4 18-8.3 27.3-11.6l23.6-8.3-18.6 16.8c-23.2 20.9-36.4 50.7-36.4 81.7 0 31.1 13.4 60.8 36.6 81.6l18.6 16.7-23.5-8.4zm78.4 13.1h-.2c-56.9 0-103.2-46.3-103.3-103.2C94.6 53.2 140.9 6.8 197.8 6.7h.2c56.9 0 103.2 46.3 103.3 103.2.1 56.9-46.2 103.3-103.1 103.4zm186.7-91.6c-21.6 27.8-49.7 50.9-81.1 66.6-8.8 4.4-18 8.3-27.3 11.6l-23.6 8.3 18.6-16.8c23.1-20.9 36.4-50.7 36.3-81.7 0-31.1-13.4-60.8-36.6-81.6l-18.6-16.7 23.6 8.3c9.3 3.2 18.5 7.1 27.4 11.5C335 47 363.2 69.9 384.9 97.7c5.5 7.1 5.5 16.9 0 24z"/>    
                                        <path d="M199.2 189.9c-44 0-79.8-35.8-79.8-79.8s35.8-79.8 79.8-79.8v-6c-47.3 0-85.8 38.5-85.8 85.8s38.5 85.8 85.8 85.8 85.8-38.5 85.8-85.8h-6c0 44-35.8 79.8-79.8 79.8zM279 80.1c0-3.7-3-6.6-6.6-6.6-1.8 0-3.5.7-4.7 2-1.3 1.3-1.9 2.9-1.9 4.7 0 3.7 3 6.6 6.6 6.6v7-7c3.6 0 6.6-3 6.6-6.7z"></path>
                                    </svg>
                                </div>
                                <div class="block ml-6">
                                    <h6 class="uppercase">art direction & design</h6>
                                    <p class="uppercase text-xs mt-3">pelatihan dan peningkatan keahlian di bidang seni dan design visual untuk menyokong terciptanya generasi muda baru yang kreatif di masa depan</p>
                                </div>
                            </div>
                        </div>
                        <div class="py-3 border-b md:pl-4">
                            <div class="inline-flex">
                                <div class="relative svgs">
                                    <svg id="services-04" viewBox="0 0 326 326" width="40" height="60" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M257.8 257.8c.5-.5.7-1.1.7-1.8v-.9l-.3-174.5h-5l.3 169.2-26.6-26.5-.3-187.6L253 9.1l.1 47.8h5L258 3.5v-.2c.1-.7-.1-1.3-.5-1.9-.4-.5-1-.9-1.7-1h-.4c-.8 0-1.5.4-2 1l-.3.3-30.6 30.7-.7.2L2 95.9C.9 96.2.2 97.2.2 98.3l.1 63.2c0 1.1.8 2.1 1.8 2.4l66.3 18.8-.4 2.7c-4.4 26.2 11.5 51.3 37 58.6 4.6 1.3 9.4 2 14.1 2 20.9 0 40.2-13 48.1-32.4l1-2.5 54.7 15.5 31 30.9c.5.6 1.2 1 2 1v3-3c.7.1 1.4-.2 1.9-.7zM162 212.9c-7.4 17-24.3 28.1-42.8 28.1-4.3 0-8.7-.6-12.9-1.8-22.4-6.4-36.9-28.6-33.6-51.6l.5-3.4 90.2 25.6-1.4 3.1zm43.5 3.5v.6h-6v-2.3L5.3 159.6l-.1-59.4 194.2-55.8V40h6v2.7l15.9-4.6.3 183-16.1-4.7zM296.8 81.2l49.8-50c1-1 1-2.6.1-3.6-.5-.5-1.1-.8-1.8-.8s-1.3.3-1.8.8l-49.9 50.1c-.4.4-.6 1.1-.6 1.7 0 .7.3 1.3.8 1.8.8.9 2.4.9 3.4 0zM347 227.6l-50.1-50c-.5-.5-1.2-.8-1.8-.8-1.4 0-2.5 1.1-2.5 2.5 0 .7.3 1.3.8 1.8l50.2 50c.5.5 1.1.8 1.9.8.6 0 1.2-.2 1.7-.7 1-.9 1.1-2.5.1-3.6-.2.1-.3.1-.3 0zM345 131.9c1.5 0 2.6-1.1 2.6-2.5s-1.1-2.5-2.5-2.6h-.1l-50 .1c-1.4 0-2.6 1.1-2.6 2.5s1.1 2.5 2.5 2.6v3-3 3-3l50.1-.1z"/>    
                                    </svg>
                                </div>
                                <div class="block md:ml-8 ml-6 mt-2">
                                    <h6 class="uppercase">public speaking</h6>
                                    <p class="uppercase text-xs mt-3">pelatihan dan pengembangan kemampuan berbicara di depan umum untuk meningkatkan generasi muda yang mampu bersaing di tengah era globalisasi </p>
                                </div>
                            </div>
                        </div>
                        <div class="py-3 md:border-r border-b" >
                            <div class="inline-flex">
                                <div class="relative svgs -ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 284" width="50" height="30" id="services-05">
                                        <path d="M274.9 233.3c5.8 25.1 7.7 37.6 7.7 38.1l1 6.7-5.6-3.8c-.1-.1-11.4-7.7-30.8-19.2-23.6 12.9-44.1 18.4-68.1 18.5h-.3c-40.1 0-74-14.3-98-41.4-21.3-24-33.2-56.3-33.7-91S57.7 74 78.3 49.6c23.3-27.6 56.8-42.7 97-43.8h3.7c45.9 0 86.4 22.1 110.9 59.2h6.6C270.8 24.4 227.6 0 179.2 0c-1.6 0-3.1 0-4.7.1-92.9 3-134 75.6-132.9 141.8 1.1 66.4 44.5 138 137.2 138h.3c21.6 0 43.9-5.5 63-15.3.5-.2 1-.4 1.5-.4 1.2 0 2.9 0 28.3 14.2 7.3 4.1 14.5 8.2 19.1 10.8-.3-2.2-.7-4.8-1-7.5-6.6-48.4-6.5-49.1-5-50.6 32.7-35.5 42.8-84.8 27.7-131.7h-6.2c15.2 47.6 3.6 97.8-31.6 133.9z"></path>    
                                        <path d="M85.3 285.5c-21.9 13.9-33.4 20.3-33.5 20.4l-6 3.4 1.6-6.7c0-.1 3.2-13.2 7.6-35.8-29.4-25.9-46.6-60.5-48.6-97.7-1.9-35.6 10.9-70 35.9-96.9 3-6.1 6.2-11.8 9.9-17.2-28.4 22.7-46.6 55.5-50.8 92.7-5 44.3 10.6 87.2 43 117.6 1.5 1.4 2 2-2.8 32.1-1.4 8.5-2.8 17.1-3.7 22.5 2.4-1.2 5.4-2.8 8.4-4.4 39-20.6 41.5-21.5 43-21.5h.5l.7.2c14.5 6.1 30.5 9.2 47.7 9.2 20.7 0 41.4-4.5 59.9-12.8-6.3.7-12.6 1-19.1.8-12.7 4-25.9 6.1-39.2 6.1-18.7.1-37.5-4.1-54.5-12zM214.6 154.7c2.3 0 4.5-.9 6.1-2.5 1.6-1.6 2.5-3.8 2.5-6.1 0-4.8-3.9-8.6-8.6-8.6-2.3 0-4.5.9-6.1 2.5-1.6 1.6-2.5 3.8-2.5 6.1 0 4.7 3.8 8.6 8.6 8.6M180.3 154.7c2.3 0 4.5-.9 6.1-2.5 1.6-1.6 2.5-3.8 2.5-6.1 0-4.8-3.9-8.6-8.6-8.6-2.3 0-4.5.9-6.1 2.5-1.6 1.6-2.5 3.8-2.5 6.1 0 4.7 3.8 8.6 8.6 8.6M146.5 154.8c2.3 0 4.5-.9 6.1-2.5 1.6-1.6 2.5-3.8 2.5-6.1 0-4.8-3.9-8.6-8.6-8.6-2.3 0-4.5.9-6.1 2.5-1.6 1.6-2.5 3.8-2.5 6.1-.1 4.7 3.8 8.6 8.6 8.6"></path>
                                    </svg>
                                </div>
                                <div class="block  ml-6">
                                    <h6 class="uppercase">social content</h6>
                                    <p class="uppercase text-xs mt-3">meningkatkan kemampuan masyarakat social dalam menyelesaikan setiap permasalah yang krusial dengan cara yang edukatif</p>
                                </div>
                            </div>
                        </div>
                        <div class="py-3 border-b md:pl-4">
                            <div class="inline-flex">
                                <div class="relative svgs">
                                    <svg id="services-06" viewBox="0 0 326 326" width="40" height="60" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M311.5 314.1c1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-2.9-2.9-2.9-25.1 0-45.6-20.3-45.8-45.4v-1.4l.7-.7c27.4-28.9 42.4-66.5 42.3-106.2C308.6 69.8 239.5.8 154.7.8h-.2C113.4 1 74.7 17.1 45.6 46.2S.5 114.1.6 155.1c.1 84.8 69.2 153.8 154 153.8h.2c37.5-.1 73.6-13.8 101.7-38.7l3.3-3 .8 4.4c4.5 24.6 25.8 42.5 50.9 42.5m-156.6-10.9h-.2c-81.6 0-148.1-66.4-148.2-148C6.3 73.4 72.7 6.8 154.4 6.7h.2c81.6 0 148.1 66.4 148.2 148 .2 81.7-66.2 148.3-147.9 148.5z"></path>   
                                        <path d="M154.5 28.3h.2c69.7 0 126.5 56.7 126.6 126.4.1 69.8-56.6 126.7-126.4 126.8h-.2C85 281.6 28.1 224.8 28 155.1c0-33.3 12.9-63.6 33.9-86.3l-4.1-4.1c-22.1 23.7-35.7 55.5-35.6 90.4.1 72.9 59.5 132.2 132.4 132.2h.2c73-.1 132.3-59.6 132.2-132.6 0-72.9-59.4-132.2-132.3-132.2h-.2c-29.6 0-56.9 9.8-78.9 26.3l4.1 4.2c20.9-15.5 46.8-24.7 74.8-24.7z"></path>
                                        <path d="M244.4 179.7c6.7-6.7 10.3-15.5 10.3-25 0-19.4-15.9-35.2-35.3-35.2-1.5 0-3.1.1-5 .4l-1.7.2-2.1.5s-.1 0-.2.1c-2 .5-3.8 1.2-5.4 1.9-.1 0-.2.1-.3.1-1.8.8-3.4 1.7-4.8 2.7l-.1.1c-1.4.9-2.7 2-4 3.2l-.2.2c-.2.2-.4.3-.6.5-1.2 1.1-2.3 2.3-3.3 3.6-.1.2-.2.3-.3.5l-.3.4c-1.1 1.5-2 2.8-2.7 4.2l-.1.1c-.7 1.3-1.4 2.9-2.1 4.7l-.1.3c-.1.2-.1.4-.2.6-.5 1.5-.9 3.2-1.2 4.9 0 .2-.1.3-.1.5l-.1.4c-.3 2-.4 3.7-.4 5.3 0 1.6.1 3.3.5 5.4l.1.4c0 .2 0 .4.1.5.3 1.7.7 3.3 1.3 4.9.1.2.1.4.2.5l.1.3c.7 1.8 1.3 3.3 2.1 4.7l.1.1c.7 1.3 1.6 2.7 2.7 4.1l.2.3c.1.2.3.4.4.6 1 1.2 2.1 2.4 3.3 3.6.2.2.4.3.5.5l.2.2c1.4 1.3 2.7 2.3 4 3.2l.1.1c1.5 1 3.1 1.9 4.9 2.7l.2.1c1.7.8 3.5 1.4 5.4 1.9l2.3.6 1.7.2c1.9.3 3.4.4 4.9.4v2.5-2.5c9.5-.1 18.4-3.8 25-10.5zm-33.4.9l-1 2.2-2.3-1c-1.4-.6-2.8-1.4-4.2-2.3-.3-.2-.7-.5-1-.7l-.4-.3c-1-.7-1.9-1.5-2.8-2.3-.4-.4-.8-.7-1.2-1.1-1-1.1-1.9-2.2-2.7-3.3l-.1-.1c-.1-.2-.2-.3-.4-.5-.9-1.3-1.7-2.8-2.4-4.5-.1-.3-.3-.6-.4-1l-.2-.4c-.5-1.2-.9-2.5-1.2-3.7v-.1c-.1-.5-.2-.9-.3-1.4-.4-2-.5-3.7-.5-5.3 0-1.6.2-3.4.5-5.3.1-.4.2-.9.3-1.3v-.2c.3-1.2.7-2.5 1.1-3.7l.2-.4c.1-.3.2-.6.4-.9.7-1.7 1.5-3.1 2.4-4.5.1-.2.2-.3.4-.5l.1-.1c.8-1.2 1.8-2.3 2.8-3.3.4-.4.8-.8 1.2-1.1.8-.8 1.7-1.5 2.8-2.3l.4-.3c.3-.2.6-.5 1-.7 1.4-.9 2.8-1.7 4.2-2.3l2.3-1 1 2.2c3.7 8 5.6 16.9 5.7 25.7-.1 8.8-2.1 17.7-5.7 25.8zm8.3 3.7h-3.7l1.4-3.5c3.5-8.4 5.3-17.2 5.2-26 0-8.9-1.8-17.6-5.3-26l-1.5-3.5h3.9c16.2 0 29.5 13.2 29.5 29.4 0 16.3-13.2 29.5-29.4 29.5h-.1zM94.9 189.9l1.7-.2 2.1-.5h.1c2-.5 3.8-1.2 5.5-1.9l.2-.1c1.8-.8 3.4-1.7 4.9-2.7l.2-.1c1.3-.9 2.6-1.9 4-3.2l.2-.2c.2-.2.4-.3.6-.5 1.2-1.1 2.3-2.3 3.3-3.6.1-.2.2-.3.4-.5l.3-.4c1.1-1.5 2-2.9 2.7-4.2l.1-.1c.7-1.4 1.4-2.9 2.1-4.7l.1-.3c.1-.2.1-.4.2-.6.5-1.6.9-3.2 1.2-4.9 0-.2.1-.3.1-.5l.1-.4c.3-2 .4-3.7.4-5.3 0-1.6-.1-3.3-.5-5.4l-.1-.4c0-.2 0-.3-.1-.5-.3-1.7-.7-3.3-1.3-4.9-.1-.2-.1-.3-.2-.5l-.1-.4c-.7-1.8-1.3-3.3-2.1-4.7 0 0-.1-.1-.1-.2-.7-1.2-1.6-2.6-2.7-4.1l-.2-.3c-.1-.2-.3-.4-.4-.5-1-1.2-2.1-2.4-3.3-3.6-.2-.2-.4-.4-.6-.5l-.2-.1c-1.4-1.2-2.7-2.3-4-3.1-.1 0-.1-.1-.2-.1-1.5-1-3.1-1.9-4.9-2.7l-.2-.1c-1.7-.8-3.5-1.4-5.4-1.9l-2.3-.6-1.7-.2c-1.9-.3-3.4-.4-4.9-.4-9.4 0-18.3 3.7-25 10.4-6.7 6.7-10.3 15.5-10.3 25 0 19.4 15.9 35.2 35.3 35.2v2.5l.1-2.5c1.5-.1 3-.2 4.9-.5zm3.5-60.6l1-2.2 2.3 1c1.4.6 2.8 1.4 4.2 2.3.3.2.7.5 1 .7l.4.3c1 .7 1.9 1.5 2.8 2.3.4.4.8.7 1.2 1.1 1 1.1 1.9 2.2 2.7 3.3l.1.1c.1.2.2.3.4.5.9 1.3 1.7 2.8 2.4 4.5.1.3.3.6.4.9l.2.4c.5 1.2.9 2.5 1.2 3.7v.2c.1.4.2.9.3 1.4.4 2 .5 3.7.5 5.3 0 1.6-.2 3.4-.5 5.3-.1.4-.2.9-.3 1.3v.2c-.3 1.2-.7 2.5-1.1 3.7l-.2.4c-.1.3-.2.6-.4.9-.7 1.7-1.5 3.1-2.4 4.5-.1.2-.2.3-.4.5l-.1.1c-.8 1.2-1.8 2.3-2.8 3.4-.4.4-.8.8-1.2 1.1-.8.8-1.7 1.5-2.8 2.3l-.4.3c-.3.2-.6.5-1 .7-1.4.9-2.8 1.7-4.2 2.3l-2.3 1-1-2.2c-3.7-8-5.6-16.9-5.7-25.7.1-9 2-17.9 5.7-25.9zm-38 25.8c0-7.9 3-15.3 8.6-20.9s13-8.7 20.8-8.7h3.8l-1.4 3.5c-3.5 8.4-5.3 17.2-5.2 26s1.8 17.6 5.3 26l1.5 3.5H90c-16.3 0-29.6-13.2-29.6-29.4zM160 125l.4-.1c.2 0 .3 0 .5-.1 1.7-.3 3.3-.7 4.9-1.3.2-.1.3-.1.5-.2l.4-.1c1.8-.7 3.3-1.3 4.7-2.1l.1-.1c1.3-.7 2.6-1.6 4.1-2.7l.3-.2c.2-.1.4-.3.6-.4 1.3-1 2.5-2.1 3.6-3.3.2-.2.3-.4.5-.5l.2-.2c1.2-1.4 2.3-2.7 3.2-4v-.1c1-1.5 1.9-3.2 2.7-4.9l.1-.2c.8-1.7 1.4-3.5 1.9-5.4l.6-2.3.2-1.7c.3-1.9.4-3.5.4-4.9 0-19.4-15.9-35.2-35.3-35.2-19.5 0-35.3 15.9-35.3 35.3 0 1.5.1 3 .4 4.9l.2 1.7.5 2.1c0 .1 0 .1.1.2.5 2 1.2 3.8 1.9 5.5 0 .1.1.2.1.3.8 1.7 1.7 3.4 2.7 4.8l.1.1c.9 1.3 1.9 2.6 3.2 4l.2.2c.2.2.4.4.5.6 1.1 1.2 2.3 2.3 3.6 3.3.2.1.4.3.6.4l.3.2c1.5 1.1 2.9 2 4.2 2.7l.1.1c1.3.7 2.9 1.4 4.7 2.1l.4.1c.2.1.3.1.5.2 1.5.5 3.2.9 4.9 1.2.2 0 .4.1.5.1l.4.1c2 .3 3.7.4 5.3.4v2.5l.1-2.5c1.5-.2 3.2-.3 5.2-.6zm-34.9-31v-3.8c0-16.3 13.2-29.5 29.4-29.5S184 73.9 184 90.1v3.8l-3.4-1.4c-8.1-3.3-17-5-25.9-5-9 0-18 1.8-26.1 5.1l-3.5 1.4zm24.2 25.1c-.5-.1-.9-.2-1.3-.3h-.2c-1.2-.3-2.5-.7-3.7-1.1l-.4-.2c-.3-.1-.6-.2-.9-.4-1.7-.8-3.2-1.5-4.5-2.4-.2-.1-.3-.2-.5-.4l-.1-.1c-1.2-.8-2.3-1.7-3.3-2.8-.4-.4-.8-.8-1.1-1.2-.8-.8-1.5-1.8-2.3-2.8l-.3-.4c-.2-.3-.5-.6-.7-.9-.9-1.4-1.7-2.8-2.3-4.2l-1-2.2 2.2-1c7.9-3.6 16.9-5.6 25.8-5.6 8.9 0 17.8 1.9 25.7 5.5l2.2 1-1 2.3c-.6 1.4-1.4 2.8-2.3 4.2-.2.4-.5.7-.7 1l-.3.3c-.7 1-1.5 1.9-2.3 2.7-.4.4-.8.8-1.1 1.2-1.1 1-2.2 1.9-3.3 2.7l-.1.1c-.2.1-.3.3-.5.4-1.3.9-2.8 1.7-4.4 2.4-.3.1-.6.3-1 .4l-.4.2c-1.2.5-2.5.9-3.7 1.2h-.2c-.5.1-.9.2-1.4.3-1.9.4-3.7.5-5.3.5-1.6.1-3.4 0-5.3-.4zM190.1 219.6c0-1.5-.1-3-.4-4.9l-.2-1.7-.6-2.3c-.5-1.9-1.1-3.7-1.9-5.4l-.1-.2c-.8-1.8-1.7-3.4-2.7-4.9l-.1-.2c-.9-1.3-1.9-2.6-3.1-4l-.2-.2c-.2-.2-.3-.4-.5-.5-1.1-1.2-2.3-2.3-3.6-3.3-.2-.1-.3-.3-.5-.4l-.3-.2c-1.5-1.1-2.9-2-4.2-2.7l-.1-.1c-1.4-.7-2.9-1.4-4.7-2.1l-.3-.1c-.2-.1-.4-.2-.6-.2-1.5-.5-3.2-.9-4.9-1.2-.2 0-.4-.1-.6-.1l-.4-.1c-2-.3-3.7-.4-5.3-.4-1.7 0-3.4.1-5.4.5l-.4.1c-.2 0-.3 0-.5.1-1.7.3-3.4.7-4.9 1.3-.2.1-.4.1-.5.2l-.3.1c-1.8.7-3.3 1.3-4.7 2.1 0 0-.1.1-.2.1-1.3.7-2.6 1.6-4.1 2.7l-.3.2c-.2.1-.4.3-.6.4-1.3 1-2.5 2.1-3.6 3.3-.2.2-.3.4-.5.6l-.2.2c-1.2 1.4-2.3 2.7-3.1 4l-.1.1c-1 1.6-1.9 3.2-2.7 4.9l-.1.2c-.8 1.7-1.4 3.5-1.9 5.4l-.6 2.3-.2 1.7c-.3 1.9-.4 3.4-.4 4.9 0 19.4 15.9 35.2 35.3 35.2v2.5l.1-2.5c19.4-.1 35.2-15.9 35.2-35.4zm-62.3-11.7c.6-1.4 1.4-2.8 2.3-4.2.2-.4.5-.7.7-1l.3-.3c.7-1 1.5-1.9 2.3-2.7.4-.4.8-.8 1.1-1.2 1.1-1 2.2-1.9 3.3-2.7l.1-.1c.2-.1.3-.2.5-.4 1.3-.9 2.8-1.7 4.5-2.4.3-.1.6-.3 1-.4l.4-.2c1.2-.5 2.5-.9 3.7-1.2h.2c.4-.1.9-.2 1.4-.3 1.9-.4 3.7-.5 5.3-.5 1.6 0 3.4.2 5.3.5.5.1.9.2 1.3.3h.2c1.2.3 2.5.7 3.7 1.1l.4.2c.3.1.6.2.9.4 1.7.8 3.2 1.5 4.5 2.4.2.1.3.2.5.4l.1.1c1.1.8 2.3 1.7 3.3 2.8.4.4.8.8 1.1 1.2.8.8 1.5 1.7 2.3 2.8l.3.4c.2.3.5.6.7.9.9 1.5 1.7 2.8 2.3 4.2l1 2.2-2.2 1c-7.9 3.6-16.9 5.6-25.8 5.6-8.9 0-17.8-1.9-25.7-5.5l-2.2-1 .9-2.4zm-2.5 11.8v-3.8l3.5 1.4c8.4 3.5 17.1 5.2 25.9 5.2h.1c8.9 0 17.6-1.8 26-5.3l3.5-1.5v3.8c0 7.9-3 15.3-8.6 20.9-5.6 5.6-13 8.7-20.8 8.7-16.4.1-29.6-13.1-29.6-29.4z"></path>
                                    </svg>
                                </div>
                                <div class="block md:ml-8 ml-6">
                                    <h6 class="uppercase">Leadership</h6>
                                    <p class="uppercase text-xs mt-3">pengembagan kemampuan leadership yang baik dan tepat untuk generasi muda, pemuda & pemudi hebat indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section data-scroll-section class="px-2 sm:px-1 md:mx-10 md:pb-64 md:min-h-0 min-h-screen">
            <div class="flex md:justify-end justify-start">
                <div class="md:text-right mt-10">
                    <h5 class="font-semibold text-sm uppercase">Tentang applikasi</h5>
                    <p class="text-sm md:max-w-xl">Pembuatan Mobile Applikasi dan Website Alang Institute menggunakan framework Vue.js. Sumber resource code di bangun oleh Department Learning & Curriculum Development,
                        resource path image dan Design UI dibangun oleh Department Media & Design Management</p>
                    <p class="text-sm mt-10">
                        apps by prio dwi sembodo
                    </p>
                </div>
            </div>
        </section>
      <cursor-fx ref="cursor" class="md:block hidden" :color="colors" :color-hover="colors"/>
  </div>
</template>

<script>
import locomotive from '../plugin/locomotive.js';
import {gsap,Expo} from 'gsap';
import CircleType from 'circletype';
export default {
    props:{
        colors: String
    },
    name: 'About',
    mixins: [locomotive],
    data() {
        return {
            list: [],
            current_page: 1
        }
    },
    computed:{
        userfilter(){
            return this.$store.state.users.userall.map(s => {
                return s;
            }).sort((a,b)=> {
                return a.detail.departemen_id - b.detail.departemen_id ;
            })
        },
    },
    created() {
        this.$store.dispatch('users/AllUser');
    },
    mounted(){
        this.masi();
        this.anim();
        this.circle();
        this.setPage(this.current_page);
    },
    methods:{
        setPage(val){
            return this.list = this.userfilter.slice((val - 1) * 5, val * 5)
        },
        next(){
           this.setPage(++this.current_page)
        },
        back(){
           this.setPage(--this.current_page)
        },
        circle(){
            new CircleType(document.getElementById('circling'));
        },
        anim(){
            let tl = new gsap.timeline();
            tl.to('.sp',{y: '0%',duration: 1.8, stagger: 0.5, ease: Expo.ease});
        },
        masi(){
            let tl = new gsap.timeline();
            tl.fromTo(".anim",5,{ opacity: 0, y: "100%" },{duration: 3, opacity: 1, stagger: 1, y: "0%" });
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/font/font.scss';
@import '../style.scss';
@keyframes animate {
    0%{
        transform: rotate(360deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.about{
    h2{
        font-family: $font-perpetua;
    }
}
#circling{
    font-family: $font-reguler;
    animation: animate 20s infinite linear;
}
.scroll{
    animation: animasimove 25s linear infinite;
}
@keyframes animasimove {
    0%{
        transform: translate(0,0);
    }
    100%{
        transform: translate(-100%,0);
    }
}
</style>
