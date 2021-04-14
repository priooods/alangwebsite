<template>
    <div id="biodata">
        <div class="container">
            <div class="row justify-content-center align-items-center my-3">
                <div class="col-12 col-md-5">
                    <div class="col-12 mb-5">
                        <h2>Alang Institute Biodata</h2>
                        <p>Harap lengkapi semua biodata yang tersedia. <br>
                        Semua yang diberi tanda ( <span>*</span> ) diharuskan di isi, <br> dan sisanya bersifat opsional</p>
                    </div>
                    <div class="col-12" v-show="show == 0">
                        <div class="login mb-3">
                            <h6 class="mb-4">Login Information</h6>
                            <div class="avatar">
                                <input type="file" @change="onFileChange">
                                <vs-avatar v-if="url" circle size="100">
                                    <img :src="url" />
                                </vs-avatar>
                                <vs-avatar v-else circle size="90">
                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTdFQ0VEOyIgZD0iTTE4LjYxMyw0MS41NTJsLTcuOTA3LDQuMzEzYy0wLjQ2NCwwLjI1My0wLjg4MSwwLjU2NC0xLjI2OSwwLjkwM0MxNC4wNDcsNTAuNjU1LDE5Ljk5OCw1MywyNi41LDUzDQoJYzYuNDU0LDAsMTIuMzY3LTIuMzEsMTYuOTY0LTYuMTQ0Yy0wLjQyNC0wLjM1OC0wLjg4NC0wLjY4LTEuMzk0LTAuOTM0bC04LjQ2Ny00LjIzM2MtMS4wOTQtMC41NDctMS43ODUtMS42NjUtMS43ODUtMi44ODh2LTMuMzIyDQoJYzAuMjM4LTAuMjcxLDAuNTEtMC42MTksMC44MDEtMS4wM2MxLjE1NC0xLjYzLDIuMDI3LTMuNDIzLDIuNjMyLTUuMzA0YzEuMDg2LTAuMzM1LDEuODg2LTEuMzM4LDEuODg2LTIuNTN2LTMuNTQ2DQoJYzAtMC43OC0wLjM0Ny0xLjQ3Ny0wLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLDEuMDUzLTcuOTc3LTkuNzUtNy45NzdzLTkuNzUsNy45NzctOS43NSw3Ljk3N3Y1LjEyNg0KCWMtMC41NCwwLjQ4OC0wLjg4NiwxLjE4NS0wLjg4NiwxLjk2NXYzLjU0NmMwLDAuOTM0LDAuNDkxLDEuNzU2LDEuMjI2LDIuMjMxYzAuODg2LDMuODU3LDMuMjA2LDYuNjMzLDMuMjA2LDYuNjMzdjMuMjQNCglDMjAuMjk2LDM5Ljg5OSwxOS42NSw0MC45ODYsMTguNjEzLDQxLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNMjYuOTUzLDAuMDA0QzEyLjMyLTAuMjQ2LDAuMjU0LDExLjQxNCwwLjAwNCwyNi4wNDdDLTAuMTM4LDM0LjM0NCwzLjU2LDQxLjgwMSw5LjQ0OCw0Ni43Ng0KCQljMC4zODUtMC4zMzYsMC43OTgtMC42NDQsMS4yNTctMC44OTRsNy45MDctNC4zMTNjMS4wMzctMC41NjYsMS42ODMtMS42NTMsMS42ODMtMi44MzV2LTMuMjRjMCwwLTIuMzIxLTIuNzc2LTMuMjA2LTYuNjMzDQoJCWMtMC43MzQtMC40NzUtMS4yMjYtMS4yOTYtMS4yMjYtMi4yMzF2LTMuNTQ2YzAtMC43OCwwLjM0Ny0xLjQ3NywwLjg4Ni0xLjk2NXYtNS4xMjZjMCwwLTEuMDUzLTcuOTc3LDkuNzUtNy45NzcNCgkJczkuNzUsNy45NzcsOS43NSw3Ljk3N3Y1LjEyNmMwLjU0LDAuNDg4LDAuODg2LDEuMTg1LDAuODg2LDEuOTY1djMuNTQ2YzAsMS4xOTItMC44LDIuMTk1LTEuODg2LDIuNTMNCgkJYy0wLjYwNSwxLjg4MS0xLjQ3OCwzLjY3NC0yLjYzMiw1LjMwNGMtMC4yOTEsMC40MTEtMC41NjMsMC43NTktMC44MDEsMS4wM1YzOC44YzAsMS4yMjMsMC42OTEsMi4zNDIsMS43ODUsMi44ODhsOC40NjcsNC4yMzMNCgkJYzAuNTA4LDAuMjU0LDAuOTY3LDAuNTc1LDEuMzksMC45MzJjNS43MS00Ljc2Miw5LjM5OS0xMS44ODIsOS41MzYtMTkuOUM1My4yNDYsMTIuMzIsNDEuNTg3LDAuMjU0LDI2Ljk1MywwLjAwNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />    
                                </vs-avatar>
                            </div>
                            <b-form-group id="username">
                                <label required label-size="sm" for="username">Username <span>*</span></label>
                                <b-form-input v-model="form.name" id="username input" size="sm" placeholder="Masukan username kamu"></b-form-input>
                            </b-form-group>
                            <b-form-group id="password">
                                <label label-size="sm" for="password">Password <span>*</span></label>
                                <b-form-input  v-model="form.password" id="password input" type="password" size="sm" placeholder="Masukan password kamu"></b-form-input>
                            </b-form-group>
                            <b-form-group id="fullname">
                                <label label-size="sm" for="fullname">Nama Lengkap <span>*</span></label>
                                <b-form-input v-model="form.fullname" id="fullname input" size="sm" placeholder="Masukan Nama Lengkap kamu"></b-form-input>
                            </b-form-group>
                            <b-form-group id="gender">
                                <label label-size="sm" for="gender">Gender <span>*</span></label>
                                <b-form-select id="gender input" v-model="form.gender" :options="options" size="sm"></b-form-select>
                            </b-form-group>
                            <div class="mt-4 d-flex justify-content-end">
                                <vs-button @click="submit">Simpan dan Lanjutkan</vs-button>
                            </div>
                        </div>
                    </div>
                    <transition name="fade" mode="out-in" v-show="show == 1">
                        <div class="col-12" v-show="show == 1">
                            <div class="detail mb-3">
                                <h6 class="mb-3">Detail Information</h6>
                                <b-form-group id="departemen">
                                    <label label-size="sm" for="departemen">Departemen <span>*</span></label>
                                    <b-form-select id="departemen input" v-model="details.departemen_id" size="sm">
                                        <b-form-select-option v-for="(data, i) in $store.state.users.departemen" v-bind:key="i" :value="data.id"
                                            >{{data.departemen}}</b-form-select-option>
                                    </b-form-select>
                                </b-form-group>
                                <b-form-group id="alamat">
                                    <label label-size="sm" for="alamat">Alamat <span>*</span></label>
                                    <b-form-textarea v-model="details.alamat" id="alamat" placeholder="Masukan alamat kamu"></b-form-textarea>
                                </b-form-group>
                                <b-form-group id="motto">
                                    <label label-size="sm" for="motto">Motto <span>*</span></label>
                                    <b-form-input v-model="details.motto" id="motto input" size="sm" placeholder="Motto hidup kamu"></b-form-input>
                                </b-form-group>
                                <b-form-group id="pendidikan">
                                    <label label-size="sm" for="pendidikan">Pendidikan</label>
                                    <b-form-input v-model="details.pendidikan" id="pendidikan input" size="sm" placeholder="Masukan pendidikan kamu"></b-form-input>
                                </b-form-group>
                                <b-form-group id="pekerjaan">
                                    <label label-size="sm" for="pekerjaan">Pekerjaan</label>
                                    <b-form-input v-model="details.pekerjaan" id="pekerjaan input" size="sm" placeholder="Masukan pekerjaan kamu"></b-form-input>
                                </b-form-group>
                                <b-form-group id="instagram">
                                    <label label-size="sm" for="instagram">Instagram</label>
                                    <b-form-input v-model="details.sosmed" id="instagram input" size="sm" placeholder="ex: @intagramku"></b-form-input>
                                </b-form-group>
                                <b-form-checkbox v-model="check">Menyetujui data digunakan untuk keperluan Alang Institute</b-form-checkbox>
                                <div class="mt-4 d-flex justify-content-end">
                                    <vs-button @click="simpanend">Simpan Biodata</vs-button>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <transition name="fade" mode="out-in" v-show="show == 2">
                        <div class="col-12" v-show="show == 2">
                            <vs-alert gradient >
                                <template #title>
                                    Kamu sudah selesai mengisi data
                                </template>
                                    Semua data kamu sudah di record dan disimpan. kembali ke halaman utama untuk mencoba fitur lainnya !
                            </vs-alert>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Biodata",
    data(){
        return{
            show: this.$cookies.get('next'),
            form:{
                name: '',
                password: '',
                avatar: null,
                fullname: '',
                gender: ''
            },
            details:{
                alamat: null,
                pendidikan: null,
                pekerjaan: null,
                motto: null,
                sosmed: null,
                user_id: this.$cookies.get('id'),
                departemen_id: null
            },
            url: null,
            options: [
                { value: "Pria", text: 'Pria' },
                { value: "Wanita", text: 'Wanita' },
            ],
            check: false
        }
    },
    created(){
        if (this.$cookies.get('next') == null) {
            this.$cookies.set('next',0);
            this.show = 0;
        }
        this.$store.dispatch('users/AllDepartemen');
    },
    methods:{
        onFileChange(e) {
            const file = e.target.files[0];
            this.form.avatar = file;
            this.url = URL.createObjectURL(file);
        },
        submit(){
            const loading = this.$vs.loading({
                text: 'Mengirim data...'
            });
            if (this.form.name.length == 0 || this.form.password.length == 0 || this.form.gender.length == 0 ||
                this.form.fullname.length == 0) {
                loading.close();
                return this.$vs.notification({
                    color: 'danger',
                    position: 'top-left',
                    title: 'Gagal melanjutkan !',
                    text: 'Harap lengkapi semua form yang diberi tanda bintang untuk melanjutkan !'
                });
            }
            if(this.form.password.length < 6 ){
                loading.close();
                return this.$vs.notification({
                    color: 'danger',
                    position: 'top-left',
                    title: 'Gagal melanjutkan !',
                    text: 'Password anda minimal 6 Characther !'
                });
            }
            var formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('fullname', this.form.fullname);
            formData.append('password', this.form.password);
            formData.append('gender', this.form.gender);
            formData.append('avatar', this.form.avatar);
            this.$store.dispatch('users/AddUser', formData);
            this.next(loading, 1);
        },
        next(loading, val){
            setTimeout(()=>{
                if (this.$cookies.get('next') == val) {
                    loading.close();
                    this.show = val;
                } else {
                    loading.close();
                    return this.$vs.notification({
                        color: 'danger',
                        position: 'top-left',
                        title: 'Gagal melakukan permintaan !',
                        text: 'Data kamu gagal disimpan, periksa kembali internet anda untuk melanjutkan !'
                    });
                }
            },4000);
        },
        simpanend(){
            const loading = this.$vs.loading({
                text: 'Menyimpan Semua Data...'
            });
            if(this.check == false){
                loading.close();
                return this.$vs.notification({
                    color: 'danger',
                    position: 'top-left',
                    title: 'Gagal melanjutkan !',
                    text: 'Kamu harus menclick box persetujuan data terlebih dahulu !'
                });
            }
            if (this.details.alamat == null || this.details.motto == null 
                || this.details.departemen_id == null ) {
                loading.close();
                return this.$vs.notification({
                    color: 'danger',
                    position: 'top-left',
                    title: 'Gagal melanjutkan !',
                    text: 'Harap lengkapi semua form yang diberi tanda bintang untuk melanjutkan !'
                });
            }
            this.$store.dispatch('users/AddUserDetail', this.details);
            this.next(loading, 2);
        }
    }
}
</script>

<style lang="scss">
@import './userstyle.scss';
#biodata{
    .col, .col-12{
        p{
            font-size: 14px ;
            line-height: 17px;
            span{
                color: red;
                font-weight: bold;
            }
        }
    }
    .avatar{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        input{
            position: absolute;
            max-width: 80px;
            height: 60px;
            opacity: 0;
            bottom: 0;
            z-index: 2;
            cursor: pointer;
        }
    }
}
</style>