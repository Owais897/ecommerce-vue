<template>
  <div>
    <a-row>
      <a-col :span="12">
        <h3>billing detail</h3>
        <hr />

        <a-form
          :form="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
          @submit="handleSubmit"
        >
          <a-form-item label="Name">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    { required: true, message: 'Please input your Name!' },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item label="Country">
            <a-select
              v-decorator="[
                'country',
                {
                  rules: [
                    { required: true, message: 'Please select your Country!' },
                  ],
                },
              ]"
              placeholder="Select a option and change input text above"
            >
              <a-select-option value="Pakistan"> Pakistan </a-select-option>
              <a-select-option value="India"> India </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="address">
            <a-input
              v-decorator="[
                'address',
                {
                  rules: [
                    { required: true, message: 'Please input your address!' },
                  ],
                },
              ]"
            ></a-input>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <!-- <a-button type="primary" html-type="submit"> Submit </a-button> -->
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="12">
        <div>
          <h3>Your Order</h3>
          <hr />
          <div>
            <a-table
              :columns="columns"
              :data-source="getBillBreakDown"
              :scroll="{ y: 440 }"
            >
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
            <a-alert :message="'total Bill ' + getTotalBill" type="success" />
            <div style="padding: 5px"></div>
            <a-collapse default-active-key="1" accordion>
              <a-collapse-panel
                key="1"
                header="Direct bank Tranfer"
                :show-arrow="false"
              >
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order won’t be
                  shipped until the funds have cleared in our account.
                </p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="Paypal" :show-arrow="false">
                <p>
                  Pay via PayPal; you can pay with your credit card if you don’t
                  have a PayPal account.
                </p>
              </a-collapse-panel>
            </a-collapse>
            <a-button style="margin-top: 20px" @click="handleSubmit">
              Place Order
            </a-button>
            <!-- <a-modal
              v-model="visible"
              title="Order placed"
              @ok="handleOk"
              :cancelButtonProps="{ display: 'none' }"
            >
              <p>{{ modalMessage }}</p>
            </a-modal> -->
            <!-- <a-row>
              <a-col :span="12"></a-col>
              <a-col :span="12"></a-col>
            </a-row> -->
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    scopedSlots: { customRender: 'title' },
  },
  {
    title: 'Count',
    dataIndex: 'value',
    key: 'value',
    // width: 80,
  },
  {
    title: 'Total/Product',
    dataIndex: 'total',
    key: 'total',
    ellipsis: true,
  },
];

export default {
  data() {
    return {
      // data,
      modalMessage: '',
      columns,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      visible: false,
    };
  },
  created() {
    console.log('aaaaaaaaaaaaaaaaa');
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['getTotalBill', 'getBillBreakDown']),
  },
  methods: {
    ...mapMutations(['clearCart']),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);

          //   this.visible = true;
          this.modalMessage = `Hi ${values.name} your order is placed on address ${values.address} with total bill of ${this.getTotalBill}`;
          this.show();
        }
      });
    },
    show() {
      this.$success({
        title: 'Order placed',
        // JSX support
        content: (
          <div>
            <p>{this.modalMessage}</p>
          </div>
        ),
      });
      console.log('clearing cart');
      this.clearCart();
    },

    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
