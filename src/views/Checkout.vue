<template>
  <div style="padding: 0 170px">
    <a-row :gutter="[50, 0]">
      <a-col
        :xl="{ span: 12 }"
        :lg="{ span: 12 }"
        :md="{ span: 12 }"
        :xs="{ span: 24 }"
      >
        <h3 class="main-heading">billing detail</h3>
        <a-form :form="form" @submit="handleSubmit">
          <a-row :gutter="[15, 0]">
            <a-col :span="24">
              <a-form-item label="Country">
                <a-select
                  size="large"
                  v-decorator="[
                    'Country',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please select your Country!',
                        },
                      ],
                    },
                  ]"
                  placeholder="Country"
                >
                  <a-select-option value="Pakistan"> Pakistan </a-select-option>
                  <a-select-option value="India"> India </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Email">
                <a-input
                  size="large"
                  placeholder="Email"
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        { required: true, message: 'Please input your Email!' },
                      ],
                    },
                  ]"
                ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Frist Name">
                <a-input
                  size="large"
                  placeholder="Frist Name"
                  v-decorator="[
                    'frist_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Frist Name!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Last Name">
                <a-input
                  size="large"
                  placeholder="Last Name"
                  v-decorator="[
                    'last_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Last Name!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Address">
                <a-input
                  size="large"
                  placeholder="Address"
                  v-decorator="[
                    'address',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your address!',
                        },
                      ],
                    },
                  ]"
                ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="City">
                <a-input
                  size="large"
                  placeholder="City"
                  v-decorator="[
                    'city',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your City!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="State">
                <a-input
                  size="large"
                  placeholder="State"
                  v-decorator="[
                    'state',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your State!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Zip Code">
                <a-input
                  size="large"
                  placeholder="Zip Code"
                  v-decorator="[
                    'zip',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Zip code!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Phone">
                <a-input
                  size="large"
                  placeholder="Phone"
                  v-decorator="[
                    'phone',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Phone number!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Order Notes">
                <a-textarea placeholder="Order Notes" :rows="4" />
              </a-form-item>
            </a-col>
          </a-row>
          <br />
        </a-form>
      </a-col>
      <a-col
        :xl="{ span: 12 }"
        :lg="{ span: 12 }"
        :md="{ span: 12 }"
        :xs="{ span: 24 }"
      >
        <div>
          <h3 class="main-heading">Your Order</h3>
          <div class="order-box">
            <a-table
              :columns="columns"
              :data-source="getBillBreakDown"
              :scroll="{ y: 200, x: 200 }"
            >
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
            <a-alert :message="'total Bill ' + getTotalBill" type="success" />
            <div style="padding: 5px"></div>
            <a-collapse accordion>
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
            <a-button
              type="primary"
              block
              :disabled="cart.length == 0"
              style="margin-top: 20px"
              @click="handleSubmit"
            >
              Place Order
            </a-button>
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
    width: 120,
  },
  {
    title: 'Count',
    dataIndex: 'value',
    key: 'value',
    width: 80,
  },
  {
    title: 'Total/Product',
    dataIndex: 'total',
    key: 'total',
    width: 80,
    ellipsis: true,
  },
];

export default {
  data() {
    return {
      modalMessage: '',
      columns,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      visible: false,
    };
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
          this.modalMessage = `Hi ${
            values?.frist_name || ''
          } your order is placed on address ${
            values.address
          } with total bill of ${this.getTotalBill}`;
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

<style scoped>
.main-heading {
  font-size: 26px;
  font-weight: 600;
  margin: 20px 0;
  padding: 0 0 10px 0;
  text-transform: capitalize;
  border-bottom: 1px solid #eaedff;
  text-align: left;
}
.ant-form {
  text-align: left;
}
.ant-form .ant-form-item {
  margin-bottom: 4px;
}
.order-box {
  margin-top: 58px;
  padding: 30px 40px 45px;
  border: 3px solid #eaedff;
}
</style>
