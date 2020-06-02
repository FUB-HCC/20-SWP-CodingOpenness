package fub.de.restexample

import android.graphics.Color
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.JsonRequest
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.fasterxml.jackson.databind.ObjectMapper
import kotlinx.android.synthetic.main.activity_main.*
import org.json.JSONObject

class MainActivity : AppCompatActivity() {

    val url = "http://10.0.2.2:8080/foos"
    var queue: RequestQueue? = null
    val objectMapper = ObjectMapper()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(toolbar)
        val newRequestQueue = Volley.newRequestQueue(this)
        queue = newRequestQueue
        tryGet.setOnClickListener { view ->
            doCall(CRUD.GET)
        }
        tryPost.setOnClickListener { view ->
            doCall(CRUD.POST)
        }
        tryPut.setOnClickListener { view ->
            doCall(CRUD.PUT)
        }
        tryDelete.setOnClickListener { view ->
            doCall(CRUD.DELETE)
        }
    }


    fun doCall(crud: CRUD) {
        when(crud) {
            CRUD.GET -> doGetCall()
            CRUD.POST -> doPostCall()
            CRUD.PUT -> text.setText("Implement PUT for yourself")
            CRUD.DELETE -> text.setText("Implement POST for yourself")
        }
    }

    fun doGetCall() {
        val request = StringRequest(
            Request.Method.GET, url,
            Response.Listener<String> { response -> tryGet.setBackgroundColor(Color.GREEN)
                                text.setText(response.toString())},
            Response.ErrorListener { response -> tryGet.setBackgroundColor(Color.RED)
            tryGet.setText(response.localizedMessage)
                response.printStackTrace()
            text.setText(response.toString())})
        queue?.add(request)
    }

    fun doPostCall() {
        val jsonObject = JSONObject(objectMapper.writeValueAsString(Foo("should be displayed in app")))
        val request = JsonObjectRequest(
            Request.Method.POST, url, jsonObject,
            Response.Listener<JSONObject> { response -> tryPost.setBackgroundColor(Color.GREEN)
                text.setText(response.toString())},
            Response.ErrorListener { response -> tryPost.setBackgroundColor(Color.RED)
                tryGet.setText(response.localizedMessage)
                response.printStackTrace()
                text.setText(response.toString())}
            )
        queue?.add(request)
    }



}
