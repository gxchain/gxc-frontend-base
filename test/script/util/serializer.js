const abi = {
    "version": "gxc::abi/1.0",
    "types": [],
    "structs": [
        {
            "name": "account",
            "base": "",
            "fields": [
                {
                    "name": "owner",
                    "type": "uint64"
                },
                {
                    "name": "balances",
                    "type": "contract_asset[]"
                }
            ]
        },
        {
            "name": "deposit",
            "base": "",
            "fields": []
        },
        {
            "name": "withdraw",
            "base": "",
            "fields": [
                {
                    "name": "to_account",
                    "type": "string"
                },
                {
                    "name": "amount",
                    "type": "contract_asset"
                }
            ]
        }
    ],
    "actions": [
        {
            "name": "deposit",
            "type": "deposit",
            "payable": true
        },
        {
            "name": "withdraw",
            "type": "withdraw",
            "payable": false
        }
    ],
    "tables": [
        {
            "name": "account",
            "index_type": "i64",
            "key_names": [
                "owner"
            ],
            "key_types": [
                "uint64"
            ],
            "type": "account"
        }
    ],
    "error_messages": [],
    "abi_extensions": []
}

import { expect } from 'chai'
import {serializeCallData} from '../../../src/script/util/serializer'

describe("serializeCallData", () => {
  before(() => {
  })

  after(() => {
  })

  it("case1", function() {
    expect(serializeCallData('withdraw',{
        "to_account": "lzydophin94",
        "amount": {
            "asset_id": 1,
            "amount": 1000000
        }
    }, abi).toString('hex')).to.equal('0b6c7a79646f7068696e393440420f00000000000100000000000000')
  })
})