class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :pages
      t.date :date_finished
      t.string :people
      t.string :period
      t.text :something_learned
      t.text :question

      t.timestamps
    end
  end
end
