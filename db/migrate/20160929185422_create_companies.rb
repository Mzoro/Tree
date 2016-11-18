class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.integer :earnings
      t.integer :parent_id

      t.timestamps
    end
  end
end
